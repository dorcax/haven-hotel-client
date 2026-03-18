import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Eye, LockKeyhole, Lightbulb, Star } from "lucide-react";
import type { JSX } from "react";

const AboutPage = () => {
  interface Value {
    icon: JSX.Element | string;
    title: string;
    description: string;
  }

  const values: Value[] = [
    {
      icon: <Eye size={20} />,
      title: "Transparency",
      description:
        "Crystal-clear reporting and real-time data flow for every stakeholder in the ecosystem.",
    },
    {
      icon: <LockKeyhole size={20} />,
      title: "Security",
      description:
        "Advanced encryption and access controls to protect sensitive data and ensure compliance.",
    },
    {
      icon: <Lightbulb size={20} />,
      title: "Innovation",
      description:
        "Cutting-edge technology solutions that anticipate and adapt to evolving hospitality needs.",
    },
    {
      icon: <Star size={20} />,
      title: "Guest-First",
      description:
        "Designing every interaction around the human experience of the traveler.",
    },
  ];
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxury Hotel Lobby"
            className="w-full h-full object-cover"
            data-alt="Modern luxury hotel lobby with minimalist design"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfWxf0Ni8cKIgWUboIAKiPzISF7SFkMbHCTuIruP5IsMKalkTzG_KtTj_B6uLEKjeGIZsk8vFJJLEJSkPKamqPa-LVqcowokUtn9xO8sW-Xzn5_yPTQWGALTRAHsWLZusABWI7bdYrEgIv9tSYAPVzZ_yXPund278l_wQOCFbvQfp1WSXSDT_uwjb5QS9bF5V8ekx79IV3Naw9YUKqUJpNKeIUWPtOryx4O2eGncM7GnZtQAbG_xyZ0mAM4pf4H59sEga4drGzfOjK"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-on-background/60 to-on-background/20"></div>
        </div>
        <div className="relative z-10 max-w-4xl px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
            Redefining Hospitality Management
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
            A boutique approach to global operations, blending high-end
            editorial aesthetics with enterprise-grade technology.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-4">
                Our Vision
              </span>
              <h2 className="text-4xl font-black tracking-tighter text-on-surface leading-tight">
                The standard of excellence is no longer just a metric, but a
                feeling.
              </h2>
            </div>
            <div className="md:col-span-7">
              <blockquote className="text-2xl font-light text-on-surface-variant leading-relaxed italic border-l-4 border-primary pl-8 py-4">
                "We believe that property management should be as refined as the
                properties it serves. Our mission is to empower hosts with
                editorial-quality tools that transform administrative complexity
                into seamless hospitality experiences."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tighter text-on-surface">
              The Editorial Principles
            </h2>
            <p className="text-on-surface-variant mt-4 max-w-xl mx-auto">
              Foundational values that guide our digital curation and service
              delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-surface-bright p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-on-surface mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-black tracking-tighter mb-2 text-white">
                10,000+
              </div>
              <div className="text-secondary-fixed-dim text-sm font-medium uppercase tracking-widest">
                Properties Managed
              </div>
            </div>
            <div>
              <div className="text-5xl font-black tracking-tighter mb-2 text-white">
                50+
              </div>
              <div className="text-secondary-fixed-dim text-sm font-medium uppercase tracking-widest">
                Global Cities
              </div>
            </div>
            <div>
              <div className="text-5xl font-black tracking-tighter mb-2 text-white">
                24/7
              </div>
              <div className="text-secondary-fixed-dim text-sm font-medium uppercase tracking-widest">
                Concierge Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-8">
          <div className="bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-8 relative z-10">
              Join the Future of Hosting
            </h2>
            <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto relative z-10">
              Elevate your property portfolio with the world's most
              sophisticated management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="bg-white/80 text-primary px-10 py-4 rounded-lg font-black text-lg hover:bg-surface-container-low transition-all shadow-lg active:scale-95">
                Get Started
              </button>
              <button className="bg-transparent text-on-primary border-2 border-on-primary/30 px-10 py-4 rounded-lg font-bold text-lg hover:bg-on-primary/10 transition-all active:scale-95">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
