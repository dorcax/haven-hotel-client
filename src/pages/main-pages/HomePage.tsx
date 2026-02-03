import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import HeroSection from "@/components/Pages/Home/HeroSection";
import PopularDestinations from "@/components/Pages/Home/PopularDestinations";
import { popularHotels, popularApartments } from "@/data/dummyData";

const HomePage = () => {
  return (
    <>
      <div className="font-inter">
        <Header />
        <HeroSection />
        <PopularDestinations
          title="Featured Luxury Hotels"
          subtitle="Experience premium comfort and world-class hospitality in Nigeria’s most prestigious locations."
          theme="light"
          data={popularHotels}
          link="/hotels"
        />
        <PopularDestinations
          title="Exclusive Serviced Apartments"
          subtitle="Find your home away from home with our curated selection of luxury short-let apartments."
          theme="dark"
          data={popularApartments}
          link="/apartments"
        />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
