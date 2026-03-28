import { Heart, Star } from "lucide-react";

const LuxuryEscapes = () => {
  return (
    <>
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Luxury Hotels</h2>
            <p className="text-slate-500 text-sm mt-1">
              Exceptional properties for an unforgettable stay.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-md">
              <div className="absolute top-4 left-4 bg-white/90 text-slate-900 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm z-10">
                Hotel
              </div>
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Luxury resort with infinity pool at dusk"
                alt="Luxury resort with infinity pool at dusk"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfLpAqE0wbIJ0r_pH0uET03a7FUu-GNIHsYHkYSDlWY_uxwCy0eQR_gG9HaUFcQSSMHsx0KL8oBBpv8XUZkhqiInDFaMtggOWfs5607g5FeLpEOuAV2BkzRZLxQWXZW5LnPeSgvNI5Q_9Z4o518JMtCUk5gXwkxcc4OTVnD8UsgA8ILoU6zxAyNWmQDu2ZMSmjuSs4sTWleIuOO9Gl-fPwcWfj8R-cK8HVbWX2a315h9KbckZhHsXngy-HRddd3CTVN2ZE_2M_n_3H"
              />
              <button
                title="Add to favorites"
                aria-label="Add to favorites"
                className="absolute top-4 right-4 h-10 w-10 bg-white/90 rounded-full flex items-center justify-center text-slate-800 hover:text-red-500 transition-colors shadow-sm"
              >
                <Heart size={18} />
              </button>
              <div className="absolute bottom-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                Premium Selection
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">The Azure Horizon Resort</h3>
                <p className="text-slate-500 text-sm">
                  Maldives · Private Island
                </p>
              </div>
              <div className="flex items-center gap-1 font-bold">
                <Star size={14} className="text-yellow-400" />
                4.9
              </div>
            </div>
            <p className="mt-2 text-primary font-black text-xl">
              $1,250
              <span className="text-sm font-normal text-slate-500">
                / night
              </span>
            </p>
          </div>
          <div className="group cursor-pointer">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-md">
              <div className="absolute top-4 left-4 bg-white/90 text-slate-900 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm z-10">
                Hotel
              </div>
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="ClasclassNameic grand hotel exterior facade"
                alt="ClasclassNameic grand hotel exterior facade"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK5bfU9C6juhnNk_OekKle9oC7MlCeLShq_WP2Kno6HNI1Vd4tghoumbARfKiH-XxeZ8RqJ84nTfnTBbEQRnjMOORtGWXIulZmTS7-JNzGccNWIFQ5FtgnPV8-PPnvOSU-90T4GxJuoovGjE-S9tHUFSZ15dkQoQiP_APLCq8yZwMH8J_c5pUg5P9eofSODpIJkMaxDdsBAolO0qQwdBt7T7Mlx3C8pd_IvzYoMc-W7Oi5vNzXgPeHQMcOr_Jdj4H0Atvc2LzdYpbF"
              />
              <button
                title="Add to favorites"
                aria-label="Add to favorites"
                className="absolute top-4 right-4 h-10 w-10 bg-white/90 rounded-full flex items-center justify-center text-slate-800 hover:text-red-500 transition-colors shadow-sm"
              >
                <Heart size={18} />
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">Hôtel de Palais Royale</h3>
                <p className="text-slate-500 text-sm">Paris · City Centre</p>
              </div>
              <div className="flex items-center gap-1 font-bold">
                <Star size={14} className="text-yellow-400" />
                4.8
              </div>
            </div>
            <p className="mt-2 text-primary font-black text-xl">
              $890
              <span className="text-sm font-normal text-slate-500">
                / night
              </span>
            </p>
          </div>
          <div className="group cursor-pointer">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-md">
              <div className="absolute top-4 left-4 bg-white/90 text-slate-900 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm z-10">
                Hotel
              </div>
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Modern hotel villa with ocean view"
                alt="Modern hotel villa with ocean view"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABd3XQByWgCdlu1vxLLrZB6m4ykRCchDNRGllGHynYWvtvoki6B7JZn-BH9gbQYl6FquHT1EnLi9cjbJ4AwvXgXdrNpbhHLmvaIGQBFJEvMMFpb1UgqrK081q0nMjFn3POlHdtZ7xZfyAL3GWgAsX0i9T-K_Yob_gslR0PE0QRZ9FOf9zjmLlAykG3D5oYIY9J3y74X8xTwutgt2lH0N1o42LzSWRd7qPs2I5YMdG4GTvcrtkPA-QNil9ptIJgMkzHSVxXh26TdCXy"
              />
              <button
                title="Add to favorites"
                aria-label="Add to favorites"
                className="absolute top-4 right-4 h-10 w-10 bg-white/90 rounded-full flex items-center justify-center text-slate-800 hover:text-red-500 transition-colors shadow-sm"
              >
                <Heart size={18} />
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">Cliffside Sanctuary Villa</h3>
                <p className="text-slate-500 text-sm">
                  Santorini · Caldera View
                </p>
              </div>
              <div className="flex items-center gap-1 font-bold">
                <Star size={14} className="text-yellow-400" />
                5.0
              </div>
            </div>
            <p className="mt-2 text-primary font-black text-xl">
              $1,540
              <span className="text-sm font-normal text-slate-500">
                / night
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Apartments */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Modern Apartments
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Curated urban spaces for long or short stays.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-md">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Modern loft apartment interior"
                alt="Modern loft apartment interior"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF2etmi3UDS3Le0psQhciqXGD3GqNB08IXolMVzCzbinqQpClwxXEgWhmzzkLv-VCUlgdqssweLdynWa5_CLRafkEwrGO0OsajWByyk-9iHdHYkpwQOfmJLGnYjIcyV0M-vf404EqrLdZD8hcylTdj6x0C0V_97Crnn6lsGcIhn-SyLl5sZDjq7RvrWetIQnRBTwh1kxw__pBiI96Jsk8c0LrAx4Zm3OXhVnvY6yAPgQc__EYXs7dXD81p5lQ8S3dZyoh2a8T6aZN5"
              />
              <div className="absolute top-4 left-4 bg-white/90 text-slate-900 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm z-10">
                Apartment
              </div>
              <button
                title="Add to favorites"
                aria-label="Add to favorites"
                className="absolute top-4 right-4 h-10 w-10 bg-white/90 rounded-full flex items-center justify-center text-slate-800 hover:text-red-500 transition-colors shadow-sm"
              >
                <Heart size={18} />
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">Skyline View Penthouse</h3>
                <p className="text-slate-500 text-sm">New York · Manhattan</p>
              </div>
              <div className="flex items-center gap-1 font-bold">
                <Star size={14} className="text-yellow-400" />
                4.9
              </div>
            </div>
            <p className="mt-2 text-primary font-black text-xl">
              $420
              <span className="text-sm font-normal text-slate-500">
                / night
              </span>
            </p>
          </div>
          <div className="group cursor-pointer">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-md">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Minimalist design apartment"
                alt="Minimalist design apartment"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABd3XQByWgCdlu1vxLLrZB6m4ykRCchDNRGllGHynYWvtvoki6B7JZn-BH9gbQYl6FquHT1EnLi9cjbJ4AwvXgXdrNpbhHLmvaIGQBFJEvMMFpb1UgqrK081q0nMjFn3POlHdtZ7xZfyAL3GWgAsX0i9T-K_Yob_gslR0PE0QRZ9FOf9zjmLlAykG3D5oYIY9J3y74X8xTwutgt2lH0N1o42LzSWRd7qPs2I5YMdG4GTvcrtkPA-QNil9ptIJgMkzHSVxXh26TdCXy"
              />
              <div className="absolute top-4 left-4 bg-white/90 text-slate-900 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm z-10">
                Apartment
              </div>
              <button
                title="Add to favorites"
                aria-label="Add to favorites"
                className="absolute top-4 right-4 h-10 w-10 bg-white/90 rounded-full flex items-center justify-center text-slate-800 hover:text-red-500 transition-colors shadow-sm"
              >
                <Heart size={18} />
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">Zen Minimalist Studio</h3>
                <p className="text-slate-500 text-sm">Tokyo · Shibuya</p>
              </div>
              <div className="flex items-center gap-1 font-bold">
                <Star size={14} className="text-yellow-400" />
                4.7
              </div>
            </div>
            <p className="mt-2 text-primary font-black text-xl">
              $210
              <span className="text-sm font-normal text-slate-500">
                / night
              </span>
            </p>
          </div>
          <div className="group cursor-pointer">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-md">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="ClasclassNameic European style apartment"
                alt="ClasclassNameic European style apartment"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK5bfU9C6juhnNk_OekKle9oC7MlCeLShq_WP2Kno6HNI1Vd4tghoumbARfKiH-XxeZ8RqJ84nTfnTBbEQRnjMOORtGWXIulZmTS7-JNzGccNWIFQ5FtgnPV8-PPnvOSU-90T4GxJuoovGjE-S9tHUFSZ15dkQoQiP_APLCq8yZwMH8J_c5pUg5P9eofSODpIJkMaxDdsBAolO0qQwdBt7T7Mlx3C8pd_IvzYoMc-W7Oi5vNzXgPeHQMcOr_Jdj4H0Atvc2LzdYpbF"
              />
              <div className="absolute top-4 left-4 bg-white/90 text-slate-900 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm z-10">
                Apartment
              </div>
              <button
                title="Add to favorites"
                aria-label="Add to favorites"
                className="absolute top-4 right-4 h-10 w-10 bg-white/90 rounded-full flex items-center justify-center text-slate-800 hover:text-red-500 transition-colors shadow-sm"
              >
                <Heart size={18} />
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">The Artistic Loft</h3>
                <p className="text-slate-500 text-sm">Berlin · Mitte</p>
              </div>
              <div className="flex items-center gap-1 font-bold">
                <Star size={14} className="text-yellow-400" />
                4.8
              </div>
            </div>
            <p className="mt-2 text-primary font-black text-xl">
              $180
              <span className="text-sm font-normal text-slate-500">
                / night
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LuxuryEscapes;
