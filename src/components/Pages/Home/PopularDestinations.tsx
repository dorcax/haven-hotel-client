import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { popularDestinations } from "@/data/dummyData";

interface popularData {
  title: string;
  subtitle: string;
  theme: string;
  data: popularDestinations[];
  link: string;
}

const PopularDestinations = ({
  title,
  subtitle,
  theme,
  data,
  link,
}: popularData) => {
  return (
    <section
      className={`py-16 ${theme === "light" ? "bg-white" : "bg-[#1A365D]"} dark:bg-slate-900/50`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex justify-between items-end mb-10">
          <div
            className={`${theme === "light" ? "text-primary" : "text-white"}`}
          >
            <h3 className="text-3xl font-bold mb-2">{title}</h3>
            <p className=" dark:text-slate-400">{subtitle}</p>
          </div>
          <Link to={link}>
            <button
              className={`${theme === "light" ? "text-primary" : "text-white"} font-bold flex items-center gap-1 hover:text-sm cursor-pointer`}
            >
              View All
              <ArrowRight size={10} />
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map(
            ({ id, type, location, price, dataAlt, name, features, image }) => (
              <Link
                to={`/${type}/${id}`}
                key={id}
                className="group cursor-pointer"
              >
                <div
                  className="relative aspect-[3/4] overflow-hidden rounded-xl mb-3 shadow-md"
                  data-alt={dataAlt}
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <p className="font-bold">{name}</p>
                    <p className="text-xs opacity-80">{features}</p>
                  </div>
                </div>
                <div
                  className={`${theme === "light" ? "text-primary" : "text-white"}`}
                >
                  <h5 className="font-bold text-lg">{location}</h5>
                  <p className="font-semibold">Starting at {price}</p>
                </div>
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
