import { useGetAllPropertyQuery } from "@/api/data/hotels.api";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import HeroSection from "@/components/Pages/Home/HeroSection";
import PopularDestinations from "@/components/Pages/Home/PopularDestinations";

const HomePage = () => {
  const { data: propertyList, isLoading } = useGetAllPropertyQuery();
  const properties = propertyList ?? [];
  console.log("properties", properties);
  const popularHotels = properties.filter((item: any) => item.type === "HOTEL");
  const popularApartments = properties.filter(
    (item: any) => item.type === "APARTMENT",
  );

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
          isLoading={isLoading}
        />
        <PopularDestinations
          title="Exclusive Serviced Apartments"
          subtitle="Find your home away from home with our curated selection of luxury short-let apartments."
          theme="dark"
          data={popularApartments}
          // data={properties}
          link="/apartments"
          isLoading={isLoading}
        />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
