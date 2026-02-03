import { BadgeDollarSign, Languages } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <div className="size-6">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="text-[#1A365D] dark:text-white text-lg font-bold">
                HavenHotel
              </h2>
            </div>
            <p className="text-[#1A365D] dark:text-slate-400 text-sm leading-relaxed">
              Defining the next generation of luxury apartments, hotels, and
              effortless bookings.
            </p>
          </div>
          <div>
            <h6 className="font-bold mb-6">Quick Links</h6>
            <ul className="space-y-4 text-[#1A365D] dark:text-slate-400 text-sm">
              <li>
                <a className="hover:text-primary" href="#">
                  Search Hotels
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Luxury Suites
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Luxury Apartments
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Special Offers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-6">Company</h6>
            <ul className="space-y-4 text-[#1A365D] dark:text-slate-400 text-sm">
              <li>
                <a className="hover:text-primary" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-6">Admin &amp; Support</h6>
            <ul className="space-y-4 text-[#1A365D] dark:text-slate-400 text-sm">
              <li>
                <a className="hover:text-primary" href="#">
                  Partner Portal
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Admin Login
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#1A365D] dark:text-slate-500">
            © {new Date().getFullYear()} HavenHotel International. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <div className="flex items-center gap-1 text-[#1A365D] dark:text-slate-500 text-xs cursor-pointer">
              <Languages size={15} />
              English (US)
            </div>
            <div className="flex items-center gap-1 text-[#1A365D] dark:text-slate-500 text-xs cursor-pointer">
              <BadgeDollarSign size={15} />
              USD ($)
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
