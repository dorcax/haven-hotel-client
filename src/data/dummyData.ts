const wheatbaker = "/images/wheatbaker.webp";
const transcorp = "/images/transcorp.webp";
const presidential = "/images/presidential.webp";
const nike_lake = "/images/nike_lake.webp";
const azureImage = "/images/azure_suites.webp";
const oceanViewImage = "/images/ocean_view.webp";
const capitalHubImage = "/images/capital_hub.webp";
const heritageImage = "/images/heritage.webp";

export interface Amenity {
  icon: string;
  label: string;
}

export interface PropertyDetail {
  description: string;
  rating: number;
  reviewCount: number;
  gallery: string[];
  amenities: Amenity[];
  hostInfo?: {
    name: string;
    image: string;
    joinedDate: string;
  };
  featuresList: string[]; // Specific to hotels (Room service etc) or apartments (Kitchen etc)
}

export interface popularDestinations {
  id: string;
  type: "hotel" | "apartment";
  location: string;
  price: string;
  dataAlt: string;
  name: string;
  features: string;
  image: string;
  details: PropertyDetail;
}

export const popularHotels: popularDestinations[] = [
  {
    id: "wheatbaker-lagos",
    type: "hotel",
    location: "Victoria Island, Lagos",
    price: "₦150,000/night",
    dataAlt: "The Wheatbaker Hotel luxury boutique in Lagos",
    name: "The Wheatbaker",
    features: "Luxury rooms • World-class spa",
    image: wheatbaker,
    details: {
      description:
        "Experience unparalleled luxury at The Wheatbaker, Lagos' finest boutique hotel. Located in the heart of Victoria Island, we offer a serene escape with world-class amenities and personalized service.",
      rating: 4.8,
      reviewCount: 245,
      gallery: [
        wheatbaker,
        "/images/wheatbaker_bedroom.webp",
        "/images/wheatbaker_spa.webp",
        wheatbaker,
      ],
      amenities: [
        { icon: "Wifi", label: "High-speed Wi-Fi" },
        { icon: "Utensils", label: "Fine Dining" },
        { icon: "Waves", label: "Infinity Pool" },
        { icon: "Smartphone", label: "Smart Room Controls" },
      ],
      featuresList: [
        "24/7 Room Service",
        "Luxury Spa",
        "Concierge Desk",
        "Valet Parking",
      ],
    },
  },
  {
    id: "transcorp-abuja",
    type: "hotel",
    location: "Maitama, Abuja",
    price: "₦120,000/night",
    dataAlt: "Transcorp Hilton Abuja grand hotel",
    name: "Transcorp Hilton",
    features: "5-star luxury • Olympic pool",
    image: transcorp,
    details: {
      description:
        "The Transcorp Hilton Abuja is an iconic landmark in Nigeria's capital. Set on expansive grounds in Maitama, it offers a blend of African hospitality and international luxury standards.",
      rating: 4.7,
      reviewCount: 1200,
      gallery: [transcorp, transcorp, transcorp, transcorp],
      amenities: [
        { icon: "Waves", label: "Olympic-sized Pool" },
        { icon: "Shield", label: "Top-tier Security" },
        { icon: "Coffee", label: "Gourmet Breakfast" },
        { icon: "Briefcase", label: "Business Hub" },
      ],
      featuresList: [
        "Tennis Courts",
        "Multiple Restaurants",
        "Airport Shuttle",
        "Fitness Center",
      ],
    },
  },
  {
    id: "presidential-ph",
    type: "hotel",
    location: "Port Harcourt, Rivers",
    price: "₦85,000/night",
    dataAlt: "Presidential Hotel in Port Harcourt",
    name: "Presidential Hotel",
    features: "Business suites • Fine dining",
    image: presidential,
    details: {
      description:
        "A premier destination for business and leisure in the Garden City. Presidential Hotel offers spacious suites, elegant dining options, and a strategic location in Port Harcourt.",
      rating: 4.5,
      reviewCount: 560,
      gallery: [presidential, presidential, presidential, presidential],
      amenities: [
        { icon: "Briefcase", label: "Corporate Suites" },
        { icon: "Waves", label: "Swimming Pool" },
        { icon: "Utensils", label: "Fine Dining" },
        { icon: "Car", label: "Secure Parking" },
      ],
      featuresList: [
        "Conference Halls",
        "Nightlife Bar",
        "Laundry Service",
        "Gym",
      ],
    },
  },
  {
    id: "nike-lake-enugu",
    type: "hotel",
    location: "Enugu, Enugu State",
    price: "₦65,000/night",
    dataAlt: "Nike Lake Resort scenic stay in Enugu",
    name: "Nike Lake Resort",
    features: "Scenic lakeside • Nature retreat",
    image: nike_lake,
    details: {
      description:
        "Nestled on the banks of the Nike Lake, this resort provides a peaceful getaway from the city's hustle. Enjoy scenic views, lush greenery, and a tranquil atmosphere.",
      rating: 4.3,
      reviewCount: 320,
      gallery: [nike_lake, nike_lake, nike_lake, nike_lake],
      amenities: [
        { icon: "Trees", label: "Scenic Lake Views" },
        { icon: "Smile", label: "Nature Walks" },
        { icon: "Waves", label: "Outdoor Pool" },
        { icon: "Wifi", label: "Guest Wi-Fi" },
      ],
      featuresList: [
        "Boat Rides",
        "Picnic Areas",
        "Local/Intercontinental Cuisine",
        "Family Friendly",
      ],
    },
  },
];

export const popularApartments: popularDestinations[] = [
  {
    id: "azure-suites-lekki",
    type: "apartment",
    location: "Lekki Phase 1, Lagos",
    price: "₦90,000/night",
    dataAlt: "Azure Serviced Apartments in Lekki",
    name: "Azure Suites",
    features: "Modern • High-speed Wifi • Gym",
    image: azureImage,
    details: {
      description:
        "Azure Suites offers a contemporary urban living experience in the heart of Lekki. Perfectly designed for the digital nomad or traveler who values style and connectivity.",
      rating: 4.6,
      reviewCount: 156,
      gallery: [azureImage, azureImage, azureImage, azureImage],
      amenities: [
        { icon: "Wifi", label: "High-speed Fiber" },
        { icon: "Dumbbell", label: "Private Gym" },
        { icon: "Wind", label: "Climate Control" },
        { icon: "Lock", label: "Smart Lock Entry" },
      ],
      featuresList: [
        "Self Check-in",
        "Fully Equipped Kitchen",
        "Dedicated Workspace",
        "Washer & Dryer",
      ],
      hostInfo: {
        name: "Sarah (Azure Mgmt)",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
        joinedDate: "October 2022",
      },
    },
  },
  {
    id: "ocean-view-banana",
    type: "apartment",
    location: "Banana Island, Lagos",
    price: "₦250,000/night",
    dataAlt: "Ocean View Penthouse in Banana Island",
    name: "Ocean View",
    features: "Waterfront • 24/7 Power • Security",
    image: oceanViewImage,
    details: {
      description:
        "Exclusive waterfront living in Banana Island. This luxury penthouse offers stunning views of the Lagos lagoon and the ultimate in privacy and security.",
      rating: 4.9,
      reviewCount: 84,
      gallery: [oceanViewImage, oceanViewImage, oceanViewImage, oceanViewImage],
      amenities: [
        { icon: "Waves", label: "Lagoon View" },
        { icon: "Zap", label: "24/7 Uninterrupted Power" },
        { icon: "Shield", label: "VVIP Security" },
        { icon: "Monitor", label: "Smart Home System" },
      ],
      featuresList: [
        "Private Elevator",
        "Waterfront Balcony",
        "Chef on Request",
        "Concierge Service",
      ],
      hostInfo: {
        name: "Bolanle",
        image:
          "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?q=80&w=200&h=200&auto=format&fit=crop",
        joinedDate: "January 2021",
      },
    },
  },
  {
    id: "capital-hub-wuse",
    type: "apartment",
    location: "Wuse II, Abuja",
    price: "₦75,000/night",
    dataAlt: "Capital Hub Suites in Abuja",
    name: "Capital Hub",
    features: "City center • Stylish & serviced",
    image: capitalHubImage,
    details: {
      description:
        "Stay in the center of the action in Wuse II. Capital Hub provides stylish, serviced suites ideal for short-term business trips or city explorers.",
      rating: 4.4,
      reviewCount: 210,
      gallery: [
        capitalHubImage,
        capitalHubImage,
        capitalHubImage,
        capitalHubImage,
      ],
      amenities: [
        { icon: "Map", label: "City Center Location" },
        { icon: "Wifi", label: "Working WiFi" },
        { icon: "Utensils", label: "Nearby Restaurants" },
        { icon: "Car", label: "On-site Parking" },
      ],
      featuresList: [
        "24-Hour Electricity",
        "Serviced Cleaning",
        "Modern Interior",
        "Security Gate",
      ],
      hostInfo: {
        name: "Ibrahim",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
        joinedDate: "June 2023",
      },
    },
  },
  {
    id: "heritage-apartments-bodija",
    type: "apartment",
    location: "Bodija, Ibadan",
    price: "₦45,000/night",
    dataAlt: "The Heritage Apartments in Ibadan",
    name: "The Heritage",
    features: "Quiet • Family-friendly • Gated",
    image: heritageImage,
    details: {
      description:
        "A peaceful retreat in the classic Bodija neighborhood. The Heritage is perfect for families looking for a safe, quiet, and comfortable stay in Ibadan.",
      rating: 4.2,
      reviewCount: 45,
      gallery: [heritageImage, heritageImage, heritageImage, heritageImage],
      amenities: [
        { icon: "UserCheck", label: "Gated Community" },
        { icon: "Home", label: "Spacious Living" },
        { icon: "Wifi", label: "Standard WiFi" },
        { icon: "Wind", label: "Good Ventilation" },
      ],
      featuresList: [
        "Family Friendly",
        "Kitchenette",
        "Garden Area",
        "Quiet Environment",
      ],
      hostInfo: {
        name: "Mrs. Omolara",
        image:
          "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?q=80&w=200&h=200&auto=format&fit=crop",
        joinedDate: "August 2020",
      },
    },
  },
];
