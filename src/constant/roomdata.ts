import type { RoomType } from "@/pages/dashboard/room/RoomList";

export const data: RoomType[] = [
  {
    name: "Deluxe Suite",
    price: 250,
    floor: 3,
    category: "Deluxe",
    amenities: ["Wi-Fi", "Air Conditioning", "TV", "Mini Bar"],
    isAvailable: true,
    attachments: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1590490359683-74dc0d3f61c8?w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
    ],
  },
  {
    name: "Executive Room",
    price: 180,
    floor: 2,
    category: "Executive",
    amenities: ["Wi-Fi", "Desk", "Smart TV"],
    isAvailable: false,
    attachments: [
      "https://images.unsplash.com/photo-1600585154154-45c9a1bca12d?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154091-12c65b6bb5a4?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154210-45a1c2bca13f?w=800&q=80",
    ],
  },
  {
    name: "Standard Double",
    price: 120,
    floor: 1,
    category: "Standard",
    amenities: ["Wi-Fi", "Air Conditioning"],
    isAvailable: true,
    attachments: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154252-4b8b7b4a8a58?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154354-9a7b8a8e8e72?w=800&q=80",
    ],
  },
  {
    name: "Penthouse Suite",
    price: 400,
    floor: 5,
    category: "Luxury",
    amenities: ["Private Pool", "Jacuzzi", "Butler Service"],
    isAvailable: false,
    attachments: [
      "https://images.unsplash.com/photo-1600585153850-685b99eebec4?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154397-7c2f1cc2d19d?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154230-27c0f22d4c10?w=800&q=80",
    ],
  },
  {
    name: "Family Room",
    price: 200,
    floor: 2,
    category: "Family",
    amenities: ["Wi-Fi", "Kids Bed", "Mini Fridge"],
    isAvailable: true,
    attachments: [
      "https://images.unsplash.com/photo-1600585154176-9b8d8b8b8b8b?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154301-8a7b8a8b8a8a?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154209-cc63b1d50f3c?w=800&q=80",
    ],
  },
  {
    name: "Single Economy",
    price: 80,
    floor: 1,
    category: "Economy",
    amenities: ["Wi-Fi", "Fan"],
    isAvailable: true,
    attachments: [
      "https://images.unsplash.com/photo-1600585154239-9a34d1a9b835?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154255-9a2b5e8b8b8a?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154354-9a7b8a8e8e72?w=800&q=80",
    ],
  },
  {
    name: "Honeymoon Suite",
    price: 300,
    floor: 4,
    category: "Suite",
    amenities: ["Wi-Fi", "Bathtub", "Balcony View"],
    isAvailable: false,
    attachments: [
      "https://images.unsplash.com/photo-1590490359683-74dc0d3f61c8?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154209-cc63b1d50f3c?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154252-4b8b7b4a8a58?w=800&q=80",
    ],
  },
  {
    name: "Business Deluxe",
    price: 220,
    floor: 3,
    category: "Business",
    amenities: ["Wi-Fi", "Desk", "Coffee Machine"],
    isAvailable: true,
    attachments: [
      "https://images.unsplash.com/photo-1600585153972-d88b8b9d6a1d?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154091-12c65b6bb5a4?w=800&q=80",
    ],
  },
  {
    name: "Presidential Suite",
    price: 500,
    floor: 6,
    category: "Presidential",
    amenities: ["Wi-Fi", "Private Pool", "Jacuzzi", "Lounge Area"],
    isAvailable: false,
    attachments: [
      "https://images.unsplash.com/photo-1600585154309-9b3c1bca13a2?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154210-45a1c2bca13f?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154205-9a7b9a8b8b8b?w=800&q=80",
    ],
  },
  {
    name: "Garden View Room",
    price: 150,
    floor: 2,
    category: "Standard",
    amenities: ["Wi-Fi", "Balcony", "TV"],
    isAvailable: true,
    attachments: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    ],
  },
];


export const hotelFeatures = [
  {
    title: "Comfortable Bedding & Furniture",
    description:
      "Spacious rooms with cozy beds, work desks, and seating areas for maximum comfort.",
    icon: "🛏️",
  },
  {
    title: "Smart TV & Wi-Fi",
    description:
      "Enjoy high-speed internet access and entertainment with Smart TVs and streaming services.",
    icon: "📺",
  },
  {
    title: "Air Conditioning & Heating",
    description:
      "In-room climate control to keep you comfortable all year round.",
    icon: "❄️",
  },
  {
    title: "Private Bathroom",
    description:
      "Modern bathrooms with showers or bathtubs, free toiletries, and fresh towels.",
    icon: "🛁",
  },
  {
    title: "Mini Bar / Coffee Station",
    description:
      "Refresh yourself with a selection of drinks, snacks, and a coffee or tea maker.",
    icon: "☕",
  },
];

export const hotelFacilities = [
  {
    title: "Restaurant & Bar",
    description:
      "On-site dining serving local and international cuisines with refreshing beverages.",
    icon: "🍽️",
  },
  {
    title: "Swimming Pool",
    description:
      "A relaxing pool area for guests to unwind and enjoy the sunshine.",
    icon: "🏊",
  },
  {
    title: "Fitness Center / Gym",
    description:
      "Stay active with our modern gym facilities equipped with weights and machines.",
    icon: "💪",
  },
  {
    title: "Conference & Meeting Rooms",
    description:
      "Fully equipped spaces for business meetings, workshops, and corporate events.",
    icon: "🏢",
  },
  {
    title: "24-Hour Front Desk & Room Service",
    description:
      "Round-the-clock assistance including housekeeping and food delivery.",
    icon: "🕒",
  },
];
