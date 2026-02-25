import { useGetAllPropertyQuery } from "@/api/data/hotels.api";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import {
  Briefcase,
  Car,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Dumbbell,
  Grid,
  Heart,
  Home,
  Lock,
  Map,
  MapPin,
  Monitor,
  Share,
  Shield,
  ShieldCheck,
  Smartphone,
  Smile,
  Star,
  Trees,
  UserCheck,
  Utensils,
  Waves,
  Wifi,
  Wind,
  Zap,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

// Helper function to map amenity labels to icons
const getAmenityIcon = (label: string) => {
  const iconMap: { [key: string]: any } = {
    "High-speed Wi-Fi": Wifi,
    "High-speed Fiber": Wifi,
    "Working WiFi": Wifi,
    "Standard WiFi": Wifi,
    "Fine Dining": Utensils,
    "Nearby Restaurants": Utensils,
    "Local/Intercontinental Cuisine": Utensils,
    "Infinity Pool": Waves,
    "Outdoor Pool": Waves,
    "Swimming Pool": Waves,
    "Lagoon View": Waves,
    "Scenic Lake Views": Trees,
    "Nature Walks": Smile,
    "Smart Room Controls": Smartphone,
    "Smart Home System": Monitor,
    "Dedicated Workspace": Briefcase,
    "Business Hub": Briefcase,
    "Corporate Suites": Briefcase,
    "24/7 Uninterrupted Power": Zap,
    "24/7 Power": Zap,
    "Top-tier Security": Shield,
    "VVIP Security": Shield,
    "Gated Community": UserCheck,
    "Secure Parking": Car,
    "On-site Parking": Car,
    "Private Gym": Dumbbell,
    "Smart Lock Entry": Lock,
    "City Center Location": Map,
    "Spacious Living": Home,
    "Good Ventilation": Wind,
    "Climate Control": Wind,
    "Gourmet Breakfast": Coffee,
  };
  return iconMap[label] || Grid;
};

const DetailsPage = () => {
  const { id } = useParams();
  const {data:propertyList} =useGetAllPropertyQuery()
  
    

  const property =propertyList?.find((item:any)=>item.id ===id)
  console.log("properties details",property)


  if (!property) {
    return (
      <div className="flex flex-col min-h-screen font-inter">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center px-6 py-20">
          <div className="text-center max-w-md">
            <h1 className="text-6xl font-black text-gray-300 mb-4 select-none">
              404
            </h1>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Property Not Found
            </h2>
            <p className="text-gray-500 mb-8">
              We couldn't find the property you're looking for. It might have
              been moved or removed.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // const { details } = property;
  console.log("detailswwww",property?.attachments?.uploads?.[0]?.url)

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-6 text-sm font-medium">
          <Link to="/" className="text-primary hover:underline">
            Home
          </Link>
          <ChevronRight size={14} className="text-slate-400" />
          <Link
            to={`#`}
            className="text-slate-600 hover:text-primary capitalize"
          >
            {property.type}s
          </Link>
          <ChevronRight size={14} className="text-slate-400" />
          <span className="text-slate-900 truncate">{property.name}</span>
        </nav>

        {/* Title and Stats */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              {property.name}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-600">
              <span className="flex items-center gap-1.5 hover:text-primary cursor-pointer underline-offset-4 decoration-1 decoration-slate-400">
                <MapPin size={16} />
                {property.location}
              </span>
              <span className="hidden md:inline text-slate-300">•</span>
              <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                <Star className="text-yellow-500 fill-yellow-500" size={16} />
                {/* {details.rating} */} 2
                <span className="font-normal text-slate-600 underline">
                  {/* ({details.reviewCount} reviews) */}
                  20 reviews
                </span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 rounded-lg py-2.5 px-4 border border-slate-200 bg-white hover:bg-slate-50 font-bold text-slate-900 transition-colors">
              <Share size={16} />
              Share
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 rounded-lg py-2.5 px-4 border border-slate-200 bg-white hover:bg-slate-50 font-bold text-slate-900 transition-colors text-nowrap">
              <Heart size={16} />
              Save
            </button>
          </div>
        </div>

        {/* Dynamic Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 mb-10 h-auto md:h-[450px] lg:h-[550px]">
          {/* Main Large Image */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl bg-slate-100 group">
            <img
              src={property?.attachments?.uploads?.[0]?.url}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt={`${property.name} facade`}
            />
          </div>
          {/* Smaller Images */}
          <div className="hidden md:block relative overflow-hidden rounded-xl bg-slate-100 group">
            <img
              src={property?.attachments?.uploads?.[1]?.url}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt={`${property.name} interior`}
            />
          </div>
          <div className="hidden md:block relative overflow-hidden rounded-xl bg-slate-100 group">
            <img
              src={property?.attachments?.uploads?.[2]?.url}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt={`${property.name} view`}
            />
          </div>
          <div className="hidden md:block relative overflow-hidden rounded-xl bg-slate-100 group">
            <img
              src={property?.attachments?.uploads?.[1]?.url}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt={`${property.name} detail`}
            />
          </div>
          <div className="hidden md:block relative overflow-hidden rounded-xl bg-slate-100 group">
            <img
              src={property?.attachments?.uploads?.[1]?.url}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 blur-[2px] opacity-70"
              alt={`${property.name} more`}
            />
            <button className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate-900 font-black text-sm uppercase tracking-wider group-hover:scale-105 transition-transform">
              <div className="bg-white/90 p-3 rounded-full shadow-lg">
                <Grid size={20} />
              </div>
              <span className="bg-white/90 px-3 py-1 rounded shadow-sm">
                All Photos
              </span>
            </button>
          </div>
          {/* Mobile indicator if only main is visible */}
          <div className="md:hidden">
            <button className="w-full mt-2 py-3 bg-slate-100 rounded-lg font-bold flex items-center justify-center gap-2">
              <Grid size={18} />
              View all {property.attachments.uploads.length} photos
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column: Info */}
          <div className="flex-1 min-w-0 space-y-12">
            {/* Hosted By Section (mainly for apartments) */}
            {property?.hostInfo && (
              <section className="flex items-center justify-between pb-8 border-b border-slate-100">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                    Entire {property.type} hosted by {property?.hostInfo.name}
                  </h2>
                  <p className="text-slate-600">
                    {/* Joined in {details.hostInfo.joinedDate} */}
                    just in
                  </p>
                </div>
                <div className="relative">
                  <img
                    src={property?.attachments?.uploads?.[0]?.url}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                    alt={property.hostInfo.name}
                  />
                  <div className="absolute -bottom-1 -right-1 bg-primary text-white p-1 rounded-full shadow-sm">
                    <ShieldCheck size={14} />
                  </div>
                </div>
              </section>
            )}

            {/* About Section */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                About this {property.type}
              </h2>
              <p className="text-slate-600 leading-loose text-lg font-medium">
                {property?.description}
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* Amenities Section */}
            <section className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-900">
                What this place offers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                {property.amenities.map((item:any, index:any) => {
                  const Icon = getAmenityIcon(item.label);
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 transition-transform hover:translate-x-1"
                    >
                      <div className="p-3 bg-slate-50 rounded-xl text-primary">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <span className="text-lg text-slate-700 font-medium">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
              <button className="px-8 py-3.5 border-2 border-slate-900 rounded-xl font-black hover:bg-slate-900 hover:text-white transition-all transform active:scale-95">
                Show all{" "}
                {property.features.length + property.amenities.length}{" "}
                features
              </button>
            </section>

            <hr className="border-slate-100" />

            {/* Features List Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Key Features
              </h2>
              <div className="inline-flex flex-wrap gap-2">
                {property.features.map((feature:any, index:any) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-sm font-semibold hover:bg-primary/5 hover:border-primary/20 transition-colors"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </section>

            <hr className="border-slate-100" />

            {/* Calendar Section (Still Static Visual but Styled) */}
            <section className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Select Dates
                  </h2>
                  <p className="text-slate-500 mt-1">Minimum stay: 2 nights</p>
                </div>
                <button className="text-primary font-black text-sm uppercase tracking-wider hover:underline underline-offset-4 decoration-2">
                  Clear dates
                </button>
              </div>

              {/* Responsive Calendar Wrapper */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-8 overflow-x-auto">
                <div className="flex gap-12 min-w-[700px] md:min-w-0 md:grid md:grid-cols-2">
                  {/* Calendar 1 */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-6">
                      <button className="p-2 hover:bg-white rounded-full transition-colors">
                        <ChevronLeft size={20} />
                      </button>
                      <span className="font-extrabold text-slate-900">
                        March 2026
                      </span>
                      <div className="w-9" />
                    </div>
                    <div className="grid grid-cols-7 text-center text-xs font-black text-slate-400 mb-4 uppercase tracking-tighter">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                        <span key={day}>{day}</span>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 text-center gap-y-1">
                      {[...Array(31)].map((_, i) => (
                        <span
                          key={i}
                          className={`py-2 rounded-lg text-sm font-bold transition-all cursor-pointer hover:bg-white
                          ${i + 1 === 12 ? "bg-primary text-white shadow-md scale-110" : ""}
                          ${i + 1 > 12 && i + 1 < 17 ? "bg-primary/10 text-primary" : ""}
                        `}
                        >
                          {i + 1}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Calendar 2 */}
                  <div className="flex-1 hidden md:block">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-9" />
                      <span className="font-extrabold text-slate-900">
                        April 2026
                      </span>
                      <button className="p-2 hover:bg-white rounded-full transition-colors">
                        <ChevronRight size={20} />
                      </button>
                    </div>
                    <div className="grid grid-cols-7 text-center text-xs font-black text-slate-400 mb-4 uppercase tracking-tighter">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                        <span key={day}>{day}</span>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 text-center gap-y-1">
                      {[...Array(30)].map((_, i) => (
                        <span
                          key={i}
                          className="py-2 rounded-lg text-sm font-bold transition-all cursor-pointer hover:bg-white"
                        >
                          {i + 1}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Booking Widget */}
          <aside className="w-full lg:w-[400px]">
            <div className="lg:sticky lg:top-28 space-y-4">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl shadow-slate-200/60 transition-transform hover:shadow-primary/5">
                <div className="flex items-baseline justify-between mb-8">
                  <div className="space-y-1">
                    <span className="text-3xl font-black text-slate-900">
                      {property?.price}
                    </span>
                    <span className="text-slate-500 font-bold text-lg">
                      {" "}
                      / night
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 font-black text-slate-900">
                      <Star
                        className="text-yellow-500 fill-yellow-500"
                        size={16}
                      />
                      {/* {details.rating} */}
                      3
                    </div>
                    <span className="text-xs text-slate-400 font-bold underline cursor-pointer decoration-2 underline-offset-2">
                      {/* {details.reviewCount} */}24
                       reviews
                    </span>
                  </div>
                </div>

                {/* Booking Form Mockup */}
                <div className="space-y-px rounded-2xl overflow-hidden border border-slate-200 bg-slate-200 mb-8">
                  <div className="grid grid-cols-2 gap-px">
                    <div className="bg-white p-4 group cursor-pointer hover:bg-slate-50 transition-colors">
                      <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">
                        Check-in
                      </label>
                      <span className="text-sm font-bold text-slate-900">
                        03/12/2026
                      </span>
                    </div>
                    <div className="bg-white p-4 group cursor-pointer hover:bg-slate-50 transition-colors">
                      <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">
                        Checkout
                      </label>
                      <span className="text-sm font-bold text-slate-900">
                        03/17/2026
                      </span>
                    </div>
                  </div>
                  <div className="bg-white p-4 group cursor-pointer hover:bg-slate-50 transition-colors flex justify-between items-center">
                    <div>
                      <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">
                        Guests
                      </label>
                      <span className="text-sm font-bold text-slate-900">
                        2 Adults, 1 Child
                      </span>
                    </div>
                    <ChevronRight size={20} className="text-slate-300" />
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="block w-full text-center bg-primary text-white font-black py-4 rounded-xl text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Reserve Now
                </Link>

                <p className="text-center text-xs text-slate-400 font-bold mt-4">
                  * No payment required at this step
                </p>

                {/* Pricing Breakdown Mockup */}
                <div className="mt-8 space-y-4 pt-6 border-t border-slate-100">
                  <div className="flex justify-between text-slate-600 font-medium tracking-tight">
                    <span className="underline decoration-slate-300 underline-offset-4">
                      5 nights total
                    </span>
                    <span className="text-slate-900 font-bold">₦750,000</span>
                  </div>
                  <div className="flex justify-between text-slate-600 font-medium tracking-tight">
                    <span className="underline decoration-slate-300 underline-offset-4">
                      Service charges
                    </span>
                    <span className="text-slate-900 font-bold">₦15,000</span>
                  </div>
                  <hr className="border-slate-100" />
                  <div className="flex justify-between text-xl font-black text-slate-900 mt-2">
                    <span>Total Tax Inc.</span>
                    <span className="text-primary">₦765,000</span>
                  </div>
                </div>
              </div>

              {/* USP Section */}
              <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-6 space-y-4">
                <div className="flex gap-4">
                  <div className="text-primary mt-1">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Stay Secure</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      Your data and payments are protected by end-to-end
                      encryption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DetailsPage;
