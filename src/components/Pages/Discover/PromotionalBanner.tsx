const PromotionalBanner = () => {
  return (
    <section className="mb-16">
      <div className="relative rounded-2xl bg-slate-900 overflow-hidden min-h-[300px] flex items-center">
        <div className="absolute inset-0 opacity-40">
          <img
            className="w-full h-full object-cover"
            alt="Aerial view of luxury beachfront resort"
            data-alt="Aerial view of luxury beachfront resort"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu4mBGVoHESF7iQlqLj0ot5we3qPeoiAqHrvIvXj5zuu3bnFBk6kmxFo7X27hkHx3yE9D-1-kSvBxcGctk1NOFCj_ot8uFcSqbxkXFy-x19wTk6NRxT0AAY4U1PII3adqOT3nafWkMk1deJfDBbpnyRKSoJAeRGX4Az3L04wJ594crUPNwzPwb_3MfpmBYEwvPNMCKAcUwHq72eSex8l3vEqYjyWsIF1SA5ozhqSDzSMHOPYWJGTgPJPLGNyZOkpNaypDhQFqDqyYb"
          />
        </div>
        <div className="relative z-10 px-8 md:px-16 max-w-2xl py-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Join our LuxeRewards and save up to 25%
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Unlock exclusive rates, late checkouts, and complimentary upgrades
            at over 500 premium properties worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white font-bold h-12 px-8 rounded-lg hover:bg-primary/90 transition-all">
              Join Now
            </button>
            <button className="bg-white/10 backdrop-blur text-white font-bold h-12 px-8 rounded-lg hover:bg-white/20 transition-all border border-white/20">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
