import { NextRequest, NextResponse } from "next/server";
import { sendLeadEvent } from "@/app/utils/metaConversionAPI";

interface SubscribeRequest {
  email: string;
  name?: string;
  eventId?: string; // For Meta Pixel deduplication
}

interface BeehiivSubscriber {
  email: string;
  name?: string;
  custom_fields?: Record<string, string>;
  reactivate_existing?: boolean;
  send_welcome_email?: boolean;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

interface BeehiivResponse {
  data?: {
    id: string;
    email: string;
    status: string;
  };
  error?: {
    message: string;
    code?: string;
  };
}

/**
 * Extract cookie value from request headers
 */
function getCookieFromRequest(
  request: NextRequest,
  cookieName: string
): string | undefined {
  const cookieHeader = request.headers.get("cookie") || "";
  const match = cookieHeader.match(new RegExp(`${cookieName}=([^;]+)`));
  return match ? match[1] : undefined;
}

export async function POST(request: NextRequest) {
  try {
    const body: SubscribeRequest = await request.json();
    const { email, name, eventId } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Extract Facebook tracking cookies for conversion attribution
    const fbc = getCookieFromRequest(request, "_fbc");
    const fbp = getCookieFromRequest(request, "_fbp");

    // Extract client information for Meta Conversion API
    const clientIpAddress =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;

    const clientUserAgent = request.headers.get("user-agent") || undefined;

    // Log tracking data for debugging (optional - remove in production)
    console.log("Meta tracking data:", {
      fbc,
      fbp,
      clientIpAddress,
      clientUserAgent,
    });

    // Get environment variables
    const apiKey = process.env.BEEHIIV_API_KEY;
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

    if (!apiKey || !publicationId) {
      console.error("Missing Beehiiv API credentials");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Prepare subscriber data for Beehiiv API
    const subscriberData: BeehiivSubscriber = {
      email,
      reactivate_existing: true,
      send_welcome_email: true,
      utm_source: "website",
      utm_medium: "modal",
      utm_campaign: "waitlist",
    };

    // Add name if provided
    if (name) {
      subscriberData.name = name;
    }

    // Make request to Beehiiv API
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "User-Agent": "Ubenie/1.0",
        },
        body: JSON.stringify(subscriberData),
      }
    );

    const responseData: BeehiivResponse = await response.json();

    if (!response.ok) {
      console.error("Beehiiv API Error:", {
        status: response.status,
        statusText: response.statusText,
        data: responseData,
      });

      // Handle specific error cases
      if (response.status === 400) {
        const errorMessage =
          responseData.error?.message || "Invalid request data";
        if (
          errorMessage.toLowerCase().includes("already exists") ||
          errorMessage.toLowerCase().includes("duplicate")
        ) {
          return NextResponse.json(
            {
              success: true,
              message: "You are already subscribed to our waitlist!",
            },
            { status: 200 }
          );
        }
        return NextResponse.json({ error: errorMessage }, { status: 400 });
      }

      if (response.status === 401) {
        return NextResponse.json(
          { error: "Authentication failed" },
          { status: 500 }
        );
      }

      if (response.status === 429) {
        return NextResponse.json(
          { error: "Too many requests. Please try again later." },
          { status: 429 }
        );
      }

      return NextResponse.json(
        { error: "Failed to subscribe to waitlist" },
        { status: 500 }
      );
    }

    // Send Lead event to Meta Conversion API
    // This complements the browser-based Meta Pixel event for better tracking
    try {
      await sendLeadEvent(
        email,
        name,
        clientIpAddress,
        clientUserAgent,
        fbc,
        fbp,
        eventId // For deduplication with browser pixel event
      );
    } catch (metaError) {
      // Log but don't fail the request if Meta API fails
      console.error("Meta Conversion API error (non-fatal):", metaError);
    }

    // Success response
    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to the waitlist!",
      subscriber: {
        id: responseData.data?.id,
        email: responseData.data?.email,
        status: responseData.data?.status,
      },
    });
  } catch (error) {
    console.error("Subscribe API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
