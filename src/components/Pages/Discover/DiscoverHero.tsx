import { Home, Search, Calendar, User2 } from "lucide-react";

const DiscoverHero = () => {
  return (
    <section className="mb-12">
      <div className="max-w-3xl mb-10">
        <h1 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-4">
          Find your next extraordinary stay.
        </h1>
        <p className="text-lg text-slate-600 ">
          Curated collections of the world's most remarkable hotels and unique
          experiences.
        </p>
      </div>
      <div className="bg-white dark:bg-slate-900 p-2 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center gap-2">
        <div className="flex-none w-full md:w-auto flex items-center px-4 py-3 gap-3 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
          <Home className="text-slate-400" />
          <select className="bg-transparent border-none focus:ring-0 text-slate-900  text-sm font-medium pr-8 cursor-pointer">
            <option value="all">All Stays</option>
            <option value="hotels">Hotels</option>
            <option value="apartments">Apartments</option>
          </select>
        </div>
        <div className="flex-1 w-full flex items-center px-4 py-3 gap-3 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
          <Search className="text-slate-400" />
          <input
            className="w-full bg-transparent border-none focus:ring-0 text-slate-900  placeholder:text-slate-400"
            placeholder="Where are you going?"
            type="text"
          />
        </div>
        <div className="flex-1 w-full flex items-center px-4 py-3 gap-3 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
          <Calendar className="text-slate-400" />
          <input
            className="w-full bg-transparent border-none focus:ring-0 text-slate-900  placeholder:text-slate-400"
            placeholder="Dates"
            type="text"
          />
        </div>
        <div className="flex-1 w-full flex items-center px-4 py-3 gap-3">
          <User2 className="text-slate-400" />
          <input
            className="w-full bg-transparent border-none focus:ring-0 text-slate-900  placeholder:text-slate-400"
            placeholder="Guests"
            type="text"
          />
        </div>
        <button className="w-full md:w-auto bg-primary text-white font-bold h-12 px-8 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shrink-0">
          Search
        </button>
      </div>
    </section>
  );
};

export default DiscoverHero;
