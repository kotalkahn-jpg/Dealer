import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white">
            Daud&apos;s General Dealers
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Providing reliable logistics, structured procurement, and
            agricultural commodity supply solutions for government agencies,
            NGOs, businesses, farmers, and exporters.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Services
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/services/logistics" className="hover:text-white">
                Transport & Logistics
              </Link>
            </li>
            <li>
              <Link href="/services/commodities" className="hover:text-white">
                Agricultural Commodities
              </Link>
            </li>
            <li>
              <Link href="/services/bulk-procurement" className="hover:text-white">
                Bulk Procurement
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Company
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-gray-400">
            <li>📍 Malawi</li>
            <li>📞 +265 XXX XXX XXX</li>
            <li>✉️ info@daudsgeneraldealers.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Daud&apos;s General Dealers. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
