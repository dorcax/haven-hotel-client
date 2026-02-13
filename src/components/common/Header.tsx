import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-solid border-[#e7edf3] dark:border-slate-800 px-6 md:px-8 py-3 font-poppins">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between whitespace-nowrap">
        <div className="flex items-center gap-3 text-primary">
          <div className="size-8">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6_330)">
                <path
                  clip-rule="evenodd"
                  d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_330">
                  <rect fill="white" height="48" width="48"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <Link to="/">
            <h2 className="text-[#1A365D] dark:text-white text-xl font-extrabold leading-tight tracking-tight">
              HavenHotel
            </h2>
          </Link>
        </div>
        <div className="hidden md:flex flex-1 justify-center gap-10">
          <Link
            className="text-[#1A365D] dark:text-slate-200 text-sm font-semibold hover:text-primary transition-colors"
            to="/discover"
          >
            Discover
          </Link>
          <Link
            className="text-[#1A365D] dark:text-slate-200 text-sm font-semibold hover:text-primary transition-colors"
            to="/hotels"
          >
            Hotels
          </Link>
          <Link
            className="text-[#1A365D] dark:text-slate-200 text-sm font-semibold hover:text-primary transition-colors"
            to="/apartments"
          >
            Apartments
          </Link>
          <Link
            className="text-[#1A365D] dark:text-slate-200 text-sm font-semibold hover:text-primary transition-colors"
            to="/about"
          >
            About
          </Link>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Link to="/register">
            <Button className="bg-[#1A365D] hover:bg-[#1A365D]/90 font-bold hover:cursor-pointer rounded-full text-xs">
              become a host
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
