import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { navItems } from "../data";
import { Link } from "react-router-dom";

const TikTokIcon = ({ size = 20, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-4 md:px-10 xl:px-16">
      <div className="max-w-7xl mx-auto py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="logo.png"
                alt="Printora Logo"
                className="h-10 w-10 mr-3"
              />
              <span className="text-2xl font-bold text-white">Printora</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Premium custom t-shirts for individuals, teams, events, and
              businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/printora.id?igsh=ZHg1ZzFpYzMxcnhz"
                rel="noopener"
                target="_blank"
                aria-label="Instagram"
                className="p-2 rounded-full bg-gray-800 hover:bg-[#d1f33a] hover:text-gray-900 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@printora.id?is_from_webapp=1&sender_device=pc"
                rel="noopener"
                target="_blank"
                aria-label="TikTok"
                className="p-2 rounded-full bg-gray-800 hover:bg-[#d1f33a] hover:text-gray-900 transition-colors"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="hover:text-[#d1f33a] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#d1f33a] mr-3 mt-1" />
                <span>+62 857-0412-8095</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#d1f33a] mr-3 mt-1" />
                <span>printoraofc@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#d1f33a] mr-3 flex-shrink-0 mt-1" />
                <span>
                  Jl. Tukad Badung, Renon, Denpasar Selatan, Kota Denpasar, Bali
                  80226
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-center items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Printora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
