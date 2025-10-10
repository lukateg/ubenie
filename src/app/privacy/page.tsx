import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Ubenie",
  description:
    "Privacy Policy for Ubenie - Learn how we collect, use, and protect your data on our AI-powered content generation platform.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 mb-8 inline-block"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-12">Last Updated: October 10, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ubenie (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you use our AI-powered content generation service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              2.1 Information You Provide
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Account Information:</strong> Name, email address,
                password
              </li>
              <li>
                <strong>Business Information:</strong> Company name, website
                URL, industry
              </li>
              <li>
                <strong>Payment Information:</strong> Billing address, payment
                method (processed securely by third-party payment processors)
              </li>
              <li>
                <strong>Content Data:</strong> Topics, keywords, and content you
                generate using our Service
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              2.2 Automatically Collected Information
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Usage Data:</strong> Pages visited, features used, time
                spent on the Service
              </li>
              <li>
                <strong>Device Information:</strong> Browser type, operating
                system, IP address
              </li>
              <li>
                <strong>Cookies:</strong> Session data, preferences, analytics
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide, maintain, and improve our Service</li>
              <li>Generate AI-powered content based on your inputs</li>
              <li>Process your payments and manage subscriptions</li>
              <li>
                Send you service updates, security alerts, and support messages
              </li>
              <li>
                Respond to your comments, questions, and customer service
                requests
              </li>
              <li>Analyze usage patterns to improve user experience</li>
              <li>Detect, prevent, and address technical issues and fraud</li>
              <li>
                Send you marketing communications (you can opt-out at any time)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. AI and Data Processing
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use artificial intelligence to generate content based on your
              inputs. Your content inputs and generated content may be processed
              by third-party AI providers. We ensure these providers comply with
              strict data protection standards and do not use your data to train
              their models without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Information Sharing and Disclosure
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Service Providers:</strong> Third-party companies that
                help us provide the Service (e.g., hosting, analytics, payment
                processing)
              </li>
              <li>
                <strong>AI Providers:</strong> Third-party AI services used for
                content generation
              </li>
              <li>
                <strong>Legal Compliance:</strong> When required by law or to
                protect our rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, acquisition, or sale of assets
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We do NOT sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your information against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission
              over the Internet or electronic storage is 100% secure, and we
              cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your information for as long as your account is active
              or as needed to provide you services. You can request deletion of
              your data at any time by contacting us. We may retain certain
              information as required by law or for legitimate business
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Your Rights (GDPR Compliance)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are located in the European Economic Area, you have the
              following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate
                data
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                data
              </li>
              <li>
                <strong>Portability:</strong> Request transfer of your data to
                another service
              </li>
              <li>
                <strong>Objection:</strong> Object to processing of your data
              </li>
              <li>
                <strong>Restriction:</strong> Request restriction of processing
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Withdraw consent at any time
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, please contact us at privacy@ubenie.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to track activity
              on our Service and hold certain information. You can instruct your
              browser to refuse all cookies or to indicate when a cookie is
              being sent. However, if you do not accept cookies, you may not be
              able to use some portions of our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our Service may contain links to third-party websites. We are not
              responsible for the privacy practices of these external sites. We
              encourage you to read the privacy policies of every website you
              visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our Service is not intended for children under 16 years of age. We
              do not knowingly collect personal information from children. If
              you believe we have collected information from a child, please
              contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. International Data Transfers
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries
              other than your own. We ensure that such transfers comply with
              applicable data protection laws and implement appropriate
              safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last Updated&quot; date. You are advised to
              review this Privacy Policy periodically for any changes.
            </p>
          </section>

          {/* <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              14. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@ubenie.com
                <br />
                <strong>Support:</strong> support@ubenie.com
                <br />
                <strong>Location:</strong> Belgrade, Serbia
              </p>
            </div>
          </section> */}

          <section className="bg-blue-50 p-6 rounded-lg mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Your Privacy Matters
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We are committed to transparency and protecting your privacy. If
              you have any concerns or questions, please don&apos;t hesitate to
              reach out to us. We&apos;re here to help.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
