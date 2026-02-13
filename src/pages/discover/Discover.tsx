import DiscoverHero from "@/components/Pages/Discover/DiscoverHero";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const Discover = () => {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <DiscoverHero />
      </main>
      <Footer />
    </>
  );
};

export default Discover;
