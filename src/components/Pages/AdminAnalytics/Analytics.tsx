const Analytics = () => {
  return (
    <>
      <div className="border-b border-[#cfdbe7] dark:border-slate-800 flex gap-8 px-2">
        <button className="pb-4 pt-2 border-b-2 border-primary text-[#0d141b] dark:text-white text-sm font-bold">
          Daily View
        </button>
        <button className="pb-4 pt-2 border-b-2 border-transparent text-[#4c739a] text-sm font-bold hover:text-primary transition-colors">
          Weekly View
        </button>
        <button className="pb-4 pt-2 border-b-2 border-transparent text-[#4c739a] text-sm font-bold hover:text-primary transition-colors">
          Monthly View
        </button>
        <button className="pb-4 pt-2 border-b-2 border-transparent text-[#4c739a] text-sm font-bold hover:text-primary transition-colors">
          Year Over Year
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6 rounded-xl border border-[#cfdbe7] dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-[#0d141b] dark:text-white text-lg font-bold">
                Revenue Trends
              </h3>
              <p className="text-[#4c739a] text-sm font-medium">
                Performance tracking for current month
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-primary"></span>
              <span className="text-xs font-bold text-[#0d141b] dark:text-slate-300">
                Revenue
              </span>
            </div>
          </div>
          <div className="h-64 relative">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient
                  id="chartGradient"
                  x1="0%"
                  x2="0%"
                  y1="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#137fec", stopOpacity: 0.2 }}
                  ></stop>
                  <stop
                    offset="100%"
                    style={{ stopColor: "#137fec", stopOpacity: 0 }}
                  ></stop>
                </linearGradient>
              </defs>
              <path
                d="M0,80 Q10,75 20,85 T40,60 T60,50 T80,40 T100,20 L100,100 L0,100 Z"
                fill="url(#chartGradient)"
              ></path>
              <path
                d="M0,80 Q10,75 20,85 T40,60 T60,50 T80,40 T100,20"
                fill="none"
                stroke="#137fec"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              ></path>
              <circle
                cx="0"
                cy="80"
                fill="white"
                r="1.5"
                stroke="#137fec"
                strokeWidth="1"
              ></circle>
              <circle
                cx="20"
                cy="85"
                fill="white"
                r="1.5"
                stroke="#137fec"
                strokeWidth="1"
              ></circle>
              <circle
                cx="40"
                cy="60"
                fill="white"
                r="1.5"
                stroke="#137fec"
                strokeWidth="1"
              ></circle>
              <circle
                cx="60"
                cy="50"
                fill="white"
                r="1.5"
                stroke="#137fec"
                strokeWidth="1"
              ></circle>
              <circle
                cx="80"
                cy="40"
                fill="white"
                r="1.5"
                stroke="#137fec"
                strokeWidth="1"
              ></circle>
              <circle
                cx="100"
                cy="20"
                fill="white"
                r="1.5"
                stroke="#137fec"
                strokeWidth="1"
              ></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
              <div className="border-t border-[#0d141b]"></div>
              <div className="border-t border-[#0d141b]"></div>
              <div className="border-t border-[#0d141b]"></div>
              <div className="border-t border-[#0d141b]"></div>
            </div>
          </div>
          <div className="flex justify-between text-[#4c739a] text-[11px] font-bold uppercase tracking-widest px-2">
            <span>May 01</span>
            <span>May 07</span>
            <span>May 14</span>
            <span>May 21</span>
            <span>May 28</span>
            <span>May 31</span>
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-xl border border-[#cfdbe7] dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
          <div>
            <h3 className="text-[#0d141b] dark:text-white text-lg font-bold">
              Booking Volume
            </h3>
            <p className="text-[#4c739a] text-sm font-medium">
              Distribution by Room Type
            </p>
          </div>
          <div className="flex flex-col gap-5 flex-1 justify-center">
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                <span className="dark:text-slate-300">Standard Room</span>
                <span className="text-primary">142 Bookings</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                <span className="dark:text-slate-300">Deluxe Suite</span>
                <span className="text-primary">98 Bookings</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary/70 h-full rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                <span className="dark:text-slate-300">Executive Penthouse</span>
                <span className="text-primary">54 Bookings</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary/50 h-full rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                <span className="dark:text-slate-300">Family Villa</span>
                <span className="text-primary">118 Bookings</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary/80 h-full rounded-full"
                  style={{ width: "55%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
              View detailed room metrics
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-[#cfdbe7] dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-[#cfdbe7] dark:border-slate-800 flex justify-between items-center">
            <h3 className="text-[#0d141b] dark:text-white text-lg font-bold">
              High-Value Bookings
            </h3>
            <span className="text-[#4c739a] text-xs font-bold uppercase tracking-widest">
              Last 24 Hours
            </span>
          </div>
          <div className="divide-y divide-[#cfdbe7] dark:divide-slate-800">
            <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-3">
                <div
                  className="size-10 rounded-full bg-center bg-cover border-2 border-white dark:border-slate-700 shadow-sm"
                  data-alt="Male guest portrait profile picture"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtfrmNZkwFEJX3BTnmlZ_wJ9WM_pERySLE__xrcFK0CtwSYRZ6Y6RrdXlJKVoJLHQqH36HCaZXOJ_DicSlNXnK4FhI4hdWmDjAeHnkJ_j_xoskcHD41tAmwATotnq-_oBuiLt5nz3gV7qUyrpIcbhh1ikd8snisJZC7yNJ6JiHkC-rAGzZYplYNTbIA9MUODIkHQW4T1jpi9n9p9kKVeAq1JOYinKuTssDMmw_HvEBvLrpwCwkHxDO7oJ1N0k838cbq81iUseLiQ-2")`,
                  }}
                ></div>
                <div>
                  <p className="text-sm font-bold text-[#0d141b] dark:text-white">
                    Alexander Wright
                  </p>
                  <p className="text-xs text-[#4c739a] font-medium">
                    Executive Penthouse • 5 nights
                  </p>
                </div>
              </div>
              <p className="text-sm font-black text-primary">$4,250</p>
            </div>
            <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-3">
                <div
                  className="size-10 rounded-full bg-center bg-cover border-2 border-white dark:border-slate-700 shadow-sm"
                  data-alt="Female guest portrait profile picture"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD96hOpX29a1uf5QIXudbSvuc7dsRZ2DNhNWwOw-bV7UerbiomGZIbNVHQcLC6rn-O5A9Vr49E08OAc5ny2GPMYSj4kj6Y9gtMnKGyLSMxaLIXenetq-zS0wDSldskMhUVeBiH0hRxceiJivSkUu2WGuu-KD8w0HocQUERvd78HjdE27MOzuCwJtIm-QwsSnIcEirKFRTxJwQtAhzwph4c-loeVyzzhoV9Y69Auj7qmhENIb8lEajnt4dt_ddwhGPT3jRdzks4JG24Q")`,
                  }}
                ></div>
                <div>
                  <p className="text-sm font-bold text-[#0d141b] dark:text-white">
                    Sarah Jenkins
                  </p>
                  <p className="text-xs text-[#4c739a] font-medium">
                    Deluxe Suite • 4 nights
                  </p>
                </div>
              </div>
              <p className="text-sm font-black text-primary">$2,840</p>
            </div>
            <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-3">
                <div
                  className="size-10 rounded-full bg-center bg-cover border-2 border-white dark:border-slate-700 shadow-sm"
                  data-alt="Male guest portrait profile picture"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjBzdX-f_OtIJQDjD_ufgZdE0kyJGOkZLuccvOE_VqVab-cu4hm3JFdphMLcWsI8aMI4OdvRZ8T93CpwCf7wYUP0AlptX-XYD0j0CTGPfUhSnfA2xTFB5L5o738sY8z91oLsrAv2Rf1XpIQ3RMdn4ygZdgtvv2yH58a3RyUR_zqCUybTpTYh44h7qpv7upVgV2CZNcTicb2ewV62ryjdcFSqhCOV4DVuir8qzljrZbIgiGGT10wSn0fhdgazwSk5uTD6sztBQv_qxz")`,
                  }}
                ></div>
                <div>
                  <p className="text-sm font-bold text-[#0d141b] dark:text-white">
                    Michael Chen
                  </p>
                  <p className="text-xs text-[#4c739a] font-medium">
                    Family Villa • 3 nights
                  </p>
                </div>
              </div>
              <p className="text-sm font-black text-primary">$1,950</p>
            </div>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 flex justify-center">
            <button className="text-xs font-bold text-[#4c739a] hover:text-primary uppercase tracking-widest">
              View All Bookings
            </button>
          </div>
        </div>
        <div className="rounded-xl border border-[#cfdbe7] dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[#0d141b] dark:text-white text-lg font-bold">
              Peak Occupancy Times
            </h3>
            <span className="text-green-600 text-xs font-bold px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded">
              Optimal Performance
            </span>
          </div>
          <div className="grid grid-cols-7 gap-2 h-40">
            <div className="bg-primary/10 rounded flex items-end">
              <div className="bg-primary h-1/4 w-full rounded-sm"></div>
            </div>
            <div className="bg-primary/10 rounded flex items-end">
              <div className="bg-primary h-1/2 w-full rounded-sm"></div>
            </div>
            <div className="bg-primary/10 rounded flex items-end">
              <div className="bg-primary h-3/4 w-full rounded-sm"></div>
            </div>
            <div className="bg-primary/10 rounded flex items-end">
              <div className="bg-primary h-full w-full rounded-sm"></div>
            </div>
            <div className="bg-primary/10 rounded flex items-end">
              <div className="bg-primary h-4/5 w-full rounded-sm"></div>
            </div>
            <div className="bg-primary/10 rounded flex items-end">
              <div className="bg-primary h-2/3 w-full rounded-sm"></div>
            </div>
            <div className="bg-primary/10 rounded flex items-end">
              <div className="bg-primary h-1/3 w-full rounded-sm"></div>
            </div>
          </div>
          <div className="flex justify-between mt-4 text-[10px] text-[#4c739a] font-bold uppercase tracking-tighter">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
          <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10 flex gap-4">
            <span className="material-symbols-outlined text-primary">
              lightbulb
            </span>
            <p className="text-xs text-[#0d141b] dark:text-slate-300 font-medium leading-relaxed">
              <strong className="font-bold">Insight:</strong> Occupancy peaks on
              Thursdays. Consider dynamic pricing for weekend stays to balance
              mid-week volume.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
