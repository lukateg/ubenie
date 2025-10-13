"use client";

import { useState, FormEvent, useEffect } from "react";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import { useWaitlist } from "../context/WaitlistContext";
import { useMetaPixel } from "../hooks/useMetaPixel";

export default function WaitlistModal() {
  const { isOpen, closeModal } = useWaitlist();
  const { trackEvent, trackCustomEvent } = useMetaPixel();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Track when modal is opened (user shows interest)
  useEffect(() => {
    if (isOpen) {
      trackCustomEvent("WaitlistModalOpened", {
        event_category: "Engagement",
        event_label: "Waitlist Interest",
      });
    }
  }, [isOpen, trackCustomEvent]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Beehiiv API endpoint
      const BEEHIIV_API_URL = process.env.NEXT_PUBLIC_BEEHIIV_API_URL;
      const BEEHIIV_PUBLICATION_ID =
        process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID;
      const BEEHIIV_API_KEY = process.env.NEXT_PUBLIC_BEEHIIV_API_KEY;

      if (!BEEHIIV_API_URL || !BEEHIIV_PUBLICATION_ID || !BEEHIIV_API_KEY) {
        throw new Error("Beehiiv configuration is missing");
      }

      const response = await fetch(
        `${BEEHIIV_API_URL}/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${BEEHIIV_API_KEY}`,
          },
          body: JSON.stringify({
            email: email,
            reactivate_existing: false,
            send_welcome_email: true,
            utm_source: "website",
            utm_medium: "waitlist_modal",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to subscribe");
      }

      // Track successful waitlist signup
      await trackEvent("Lead", {
        content_name: "Waitlist Signup",
        content_category: "Newsletter",
        value: 1,
      });

      setIsSuccess(true);
      setEmail("");

      // Close modal after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        closeModal();
      }, 2000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      setEmail("");
      setError("");
      setIsSuccess(false);
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 animate-in fade-in zoom-in duration-200">
        {/* Close button */}
        <button
          onClick={handleClose}
          disabled={isLoading}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Success State */}
        {isSuccess ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              You&apos;re on the list! 🎉
            </h3>
            <p className="text-gray-600">
              We&apos;ll notify you as soon as we launch.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Join the Waitlist
              </h2>
              <p className="text-gray-600">
                Be the first to know when Ubenie launches and get exclusive
                early access.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Joining...
                  </>
                ) : (
                  "Join the Waitlist 🚀"
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By joining, you agree to receive updates about Ubenie. You can
                unsubscribe at any time.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
