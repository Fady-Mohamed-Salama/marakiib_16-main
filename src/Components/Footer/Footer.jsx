import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* 🟢 العمود الأول */}
        <div>
          <div className="relative w-40 h-10 mb-4">
            <Link href="/">
              <Image
                src="/images/logo3png.png"
                alt="Marakiib Logo"
                fill
                className="object-contain"
              />
            </Link>
          </div>

          <p className="text-sm leading-6 text-gray-300 ">
            Marakiib helps you find and rent the perfect car easily and safely.
            Experience comfort and reliability with us every trip.
          </p>
        </div>

        {/* 🟢 العمود الثاني */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/profile/About"
                className="hover:text-white font-semibold transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/profile/Contact"
                className="hover:text-white font-semibold transition"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/profile/Terms"
                className="hover:text-white font-semibold transition"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/profile/Privacy-Policy"
                className="hover:text-white font-semibold transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/profile/faqs"
                className="hover:text-white font-semibold transition"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* 🟢 العمود الثالث */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* الخط السفلي */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">Marakiib</span>. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
