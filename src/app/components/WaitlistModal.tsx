"use client";

import { useState, FormEvent, useEffect } from "react";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { useWaitlist } from "../context/WaitlistContext";
import { useMetaPixel } from "../hooks/useMetaPixel";

export default function WaitlistModal() {
  const { isOpen, closeModal } = useWaitlist();
  const { trackEvent, trackCustomEvent } = useMetaPixel();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
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

    // Generate unique event ID for deduplication between browser pixel and server events
    // This ensures Meta doesn't count the same event twice
    const eventId = uuidv4();

    // Track waitlist signup attempt
    trackCustomEvent("WaitlistSignupStarted", {
      event_category: "Conversion",
      event_label: "Waitlist Form Submitted",
    });

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name: name || undefined,
          eventId, // Pass event ID for server-side Conversion API deduplication
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      // Track successful waitlist signup with event ID for deduplication
      await trackEvent(
        "Lead",
        {
          content_name: "Waitlist Signup",
          content_category: "Newsletter",
          value: 1,
        },
        { eventID: eventId } // Pass event ID to browser pixel
      );

      setIsSuccess(true);

      // Reset form after successful submission
      setEmail("");
      setName("");

      // Close modal after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        closeModal();
      }, 2000);
    } catch (err) {
      console.error("Subscription error:", err);
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
      setName("");
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
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name (optional)
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed placeholder-black text-black"
                />
              </div>

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
                  className="text-black placeholder-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
