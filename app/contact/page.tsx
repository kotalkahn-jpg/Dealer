"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useRef, useState } from "react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);

  // ✅ REQUIRED STATE HOOKS
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const fd = new FormData(formRef.current);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          enquiry: fd.get("enquiry"),
          message: fd.get("message"),
          organization: fd.get("organization"),
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSuccess(true);
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="py-20 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We work with government agencies, NGOs, businesses, farmers, and
            exporters to deliver reliable supply, logistics, and procurement
            solutions.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* CONTACT DETAILS */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Contact Information
            </h2>

            <p className="mt-4 text-gray-600 max-w-md">
              Reach us through any of the channels below. Our team responds
              promptly during working hours.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">info@daudgeneraldealers.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">
                    Phone / WhatsApp / SMS
                  </p>
                  <p className="text-gray-600">+265 XXX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">
                    Malawi (Serving clients nationwide)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Business Hours</p>
                  <p className="text-gray-600">
                    Monday – Friday, 8:00 AM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Send Us a Message
            </h2>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="mt-8 space-y-6 bg-gray-50 p-8 rounded-xl border"
            >
              <input name="name" required placeholder="Full Name" />
              <input name="organization" placeholder="Organization" />
              <input name="email" type="email" required placeholder="Email" />
              <input name="phone" required placeholder="Phone" />
              <select name="enquiry">
                <option>Logistics & Transport</option>
                <option>Agricultural Commodities</option>
                <option>Bulk Procurement</option>
                <option>General Enquiry</option>
              </select>
              <textarea
                name="message"
                required
                placeholder="Message"
                rows={4}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-600 text-center font-medium">
                  Message sent successfully.
                </p>
              )}

              {error && (
                <p className="text-red-600 text-center font-medium">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
