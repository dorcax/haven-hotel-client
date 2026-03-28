import { ArrowRight } from "lucide-react";

const TrendingDestinations = () => {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tight">
          Trending Destinations
        </h2>
        <a
          className="text-sm font-bold text-primary flex items-center gap-1"
          href="#"
        >
          View all
          <ArrowRight size={12} />
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-200">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            data-alt="London city skyline at dusk"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmg3IRQ2KOj93KD92tPmn35Z8wPZj0Xo2Z7TtUe5pqOOa1JHeF9Phs5atfsnc_nIxsGOiRGStp-APTNaS_7qcMNqRGX2F2qMOsXXRUYFTM2r7nX7h3hGKCURihEBG5Kp1u6UiE0wpaHmZ_sK3VQEXMin1uCp6Hy8Z6l_0TDqLc3VpxOZWE1VNXxXg4JrQdKlcwsOYJppGJWOW1_nf7_6DIdRMQ3qbg2pHKMGKePLFTjTZAOlp6M_BbqNnbZ3slJ3G4pjSCPG23UrCr")',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <p className="text-white font-bold text-xl">London</p>
            <p className="text-white/80 text-sm">450+ Properties</p>
          </div>
        </div>
        <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-200">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            data-alt="Traditional Japanese temple in Kyoto"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBh-d-bp7GTBgjAsF2nwbgurqLbRR2Xyzfoahwg3aBMG5QFIj2zBjyvBFr5Peu5HEmTXzjYEdUOOnmOgfCJFqXaw-LBtvaJbcj-eqvFEda4IraZvhb4NfdaNhrsO6oZOStEyb7S67jtnWjx18yyquzysfJ-YpRZnHPaCJ1KsMa70RD3xoXZyHNUcgz588t7IUzk_yTNLBR2oJ8bxhsK1AkqJZ3sl_jTDI5owjvZNNqOwB2d4y8mw-JEZ7FKZxMb1hjP-CmlZqeOcQiN")',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <p className="text-white font-bold text-xl">Kyoto</p>
            <p className="text-white/80 text-sm">120+ Properties</p>
          </div>
        </div>
        <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-200">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            data-alt="Eiffel Tower at sunrise in Paris"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUGNLXemQEuk2j2ZOXJDm6hhZE64m0StXfdjw4imi19QTu9EdweWSfKCfuKhjEnO4DxkXjcmVbF8IdX1_1YuDHPMHylCQjSjJXrmB8Ehgc5pnG_juTmIsjWuKmDX3lTME1fCvyDdJxa_lEoTsxe9o3rVOVp9TzqhwsvbgsCnZUCD0cg3v2UgVNSx6T0tqFZITz2MCzh85u0aIRYVBMpGXP81Ru0L3ipGLLgC8tVShiI03pQ16WpFi7ltKQDmT467tPBEri8zsV8saI")',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <p className="text-white font-bold text-xl">Paris</p>
            <p className="text-white/80 text-sm">380+ Properties</p>
          </div>
        </div>
        <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-200">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            data-alt="Tropical beach in Amalfi Coast Italy"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDK0c_F4uAJqgo-xy2BN2wYEP0mtjfmZ_jZQJypioZBUQGgJdqQXRPFcmgGQZpRR36sxfHqAPdx74T_sxzD_gwa6OpzEflUn-KK_GI_sJ6JDdUhEizNjTWzIFRFxOMcF0wvYU3R4mO6H9ffE5EbUeTTpKK1y6ArMgoS3nKtx52L16pqKoa5as8wiPOAsIhjavDYZ-oU7GCf8CjNFfq5TK_lAOq4VH2SUJzXQyobwDX5MGls-H97sX4GshXab5B9aXUiS7Y813lanIp1")',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <p className="text-white font-bold text-xl">Amalfi</p>
            <p className="text-white/80 text-sm">95+ Properties</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;
