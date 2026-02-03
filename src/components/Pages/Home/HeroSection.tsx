import { MapPin, Calendar, Users, Search } from "lucide-react";
const backgroundImage = "/images/patrick-robert-doyle-AH8zKXqFITA-unsplash.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      <div
        className="h-[500px] w-full bg-cover bg-center flex items-center justify-center px-4"
        data-alt="Modern architectural luxury hotel with infinity pool"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url(${backgroundImage})`,
        }}
      >
        <div className="max-w-[960px] text-center flex flex-col items-center gap-4">
          <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight drop-shadow-lg">
            Experience Luxury Without Compromise
          </h1>
          <p className="text-white text-lg md:text-xl font-light max-w-2xl opacity-90">
            Book your stay at world-class apartments and hotels with exclusive
            member rates and premium concierge services.
          </p>
        </div>
      </div>
      {/* Floating Search Card */}
      <div className="max-w-[1100px] mx-auto -mt-24 relative z-10 px-4">
        <div className="bg-white dark:bg-background-dark rounded-xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row gap-4 items-end border border-slate-100 dark:border-slate-800">
          <div className="flex-1 w-full space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1A365D] dark:text-slate-400">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 text-[#1A365D]" />
              <select className="w-full h-14 pl-10 pr-4 rounded-lg border border-[#cfdbe7] dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-[#0d141b] dark:text-white focus:ring-2 focus:ring-primary focus:outline-none appearance-none">
                <option>Where are you going?</option>
                <option>Maldives, South Asia</option>
                <option>Paris, France</option>
                <option>Tokyo, Japan</option>
                <option>New York, USA</option>
                <option>Lagos, Nigeria</option>
              </select>
            </div>
          </div>
          <div className="flex-1 w-full space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1A365D] dark:text-slate-400">
              Check-In / Out
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3.5 text-[#1A365D]" />
              <button className="w-full h-14 pl-10 pr-4 flex items-center text-left rounded-lg border border-[#cfdbe7] dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-[#0d141b] dark:text-white">
                Oct 24 - Oct 31, 2023
              </button>
            </div>
          </div>
          <div className="w-full md:w-48 space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1A365D] dark:text-slate-400">
              Guests
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-3.5 text-[#1A365D]" />
              <select className="w-full h-14 pl-10 pr-4 rounded-lg border border-[#cfdbe7] dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-[#0d141b] dark:text-white focus:ring-2 focus:ring-primary focus:outline-none appearance-none">
                <option>2 Adults, 1 Room</option>
                <option>1 Adult, 1 Room</option>
                <option>2 Adults, 2 Rooms</option>
                <option>Family (4+)</option>
              </select>
            </div>
          </div>
          <button className="w-full md:w-auto h-14 px-10 bg-[#1A365D] text-white font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
            <Search />
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
