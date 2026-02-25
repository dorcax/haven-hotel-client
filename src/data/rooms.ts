import { categoryEnum } from "@/components/common/validation";

export interface Room {
  id: string;
  title: string;
  price: number;
  capacity: number;
  category: categoryEnum;
  amenities: string[];
  isAvailable: boolean;
  attachments: string[];
  description: string;
}

// export const roomsData: Room[] = [
//   {
//     id: "RM-101",
//     title: "101",
//     price: 150,
//     capacity: 2,
//     category: categoryEnum.STANDARD,
//     amenities: ["Wifi", "TV", "Air Conditioning"],
//     isAvailable: true,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=400",
//         },
//         {
//           url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description:
//       "A cozy standard room with essential amenities for a comfortable stay.",
//   },
//   {
//     id: "APT-202",
//     title: "Apt 202 - Sunset View",
//     price: 350,
//     capacity: 4,
//     category: categoryEnum.APARTMENT,
//     amenities: ["Kitchen", "Wifi", "Washer", "Parking", "Balcony"],
//     isAvailable: true,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400",
//         },
//         {
//           url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description:
//       "Spacious apartment with a stunning sunset view and full kitchen facilities.",
//   },
//   {
//     id: "RM-305",
//     title: "305",
//     price: 280,
//     capacity: 2,
//     category: categoryEnum.DELUXE,
//     amenities: ["Wifi", "TV", "Mini Bar", "Coffee Maker"],
//     isAvailable: false,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description: "Elegant deluxe room offering premium comfort and a mini bar.",
//   },
//   {
//     id: "PH-501",
//     title: "PH 501 - Royal Penthouse",
//     price: 1200,
//     capacity: 6,
//     category: categoryEnum.PENTHOUSE,
//     amenities: [
//       "Private Pool",
//       "Kitchen",
//       "Butler Service",
//       "City View",
//       "Gym",
//     ],
//     isAvailable: true,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=400",
//         },
//         {
//           url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description:
//       "The ultimate luxury experience with a private pool and butler service.",
//   },
//   {
//     id: "RM-204",
//     title: "204",
//     price: 180,
//     capacity: 2,
//     category: categoryEnum.STANDARD,
//     amenities: ["Wifi", "TV", "Work Desk"],
//     isAvailable: true,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description: "Comfortable standard room featuring a dedicated work desk.",
//   },
//   {
//     id: "APT-108",
//     title: "Apt 108 - Garden Suite",
//     price: 450,
//     capacity: 3,
//     category: categoryEnum.APARTMENT,
//     amenities: ["Patio", "Kitchen", "Wifi", "Pet Friendly"],
//     isAvailable: false,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description:
//       "Quiet garden suite apartment with a private patio, perfect for families.",
//   },
//   {
//     id: "RM-402",
//     title: "402",
//     price: 550,
//     capacity: 4,
//     category: categoryEnum.SUITE,
//     amenities: ["Wifi", "TV", "Living Area", "Safe"],
//     isAvailable: true,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description:
//       "Luxurious suite with a separate living area and top-notch amenities.",
//   },
//   {
//     id: "RM-102",
//     title: "102",
//     price: 150,
//     capacity: 2,
//     category: categoryEnum.STANDARD,
//     amenities: ["Wifi", "TV"],
//     isAvailable: true,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description: "Budget-friendly standard room with all the basics included.",
//   },
//   {
//     id: "APT-303",
//     title: "Apt 303 - Modern Studio",
//     price: 220,
//     capacity: 2,
//     category: categoryEnum.APARTMENT,
//     amenities: ["Wifi", "Kitchenette", "Smart TV"],
//     isAvailable: true,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description: "Modern studio apartment ideal for solo travelers or couples.",
//   },
//   {
//     id: "RM-306",
//     title: "306",
//     price: 320,
//     capacity: 2,
//     category: categoryEnum.DELUXE,
//     amenities: ["Wifi", "TV", "Sea View", "Coffee Maker"],
//     isAvailable: true,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description:
//       "Deluxe room with a beautiful sea view and personal coffee maker.",
//   },
//   {
//     id: "RM-205",
//     title: "205",
//     price: 180,
//     capacity: 2,
//     category: categoryEnum.STANDARD,
//     amenities: ["Wifi", "TV"],
//     isAvailable: false,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description: "Quiet standard room perfect for a restful night's sleep.",
//   },
//   {
//     id: "RM-403",
//     title: "403",
//     price: 600,
//     capacity: 4,
//     category: categoryEnum.SUITE,
//     amenities: ["Wifi", "Living Room", "Bathtub", "City View"],
//     isAvailable: true,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description: "High-end suite with a bathtub and panoramic city views.",
//   },
//   {
//     id: "APT-405",
//     title: "Apt 405 - Skyline Loft",
//     price: 480,
//     capacity: 3,
//     category: categoryEnum.APARTMENT,
//     amenities: ["Wifi", "Full Kitchen", "Gym Access", "Parking"],
//     isAvailable: true,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description: "Chic skyline loft with full kitchen and gym access.",
//   },
//   {
//     id: "RM-103",
//     title: "103",
//     price: 150,
//     capacity: 2,
//     category: categoryEnum.STANDARD,
//     amenities: ["Wifi", "TV"],
//     isAvailable: true,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description:
//       "Standard room providing excellent value and essential comforts.",
//   },
//   {
//     id: "RM-307",
//     title: "307",
//     price: 350,
//     capacity: 2,
//     category: categoryEnum.DELUXE,
//     amenities: ["Wifi", "TV", "Balcony", "Mini Bar"],
//     isAvailable: true,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1591088398332-8a77d399a80c?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description:
//       "Deluxe room with a private balcony and fully stocked mini bar.",
//   },
//   {
//     id: "APT-502",
//     title: "Apt 502 - Luxury Duplex",
//     price: 750,
//     capacity: 5,
//     category: categoryEnum.APARTMENT,
//     amenities: ["Wifi", "Kitchen", "Fireplace", "City View"],
//     isAvailable: false,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description:
//       "Two-story luxury duplex with a fireplace and stunning city views.",
//   },
//   {
//     id: "RM-206",
//     title: "206",
//     price: 180,
//     capacity: 2,
//     category: categoryEnum.STANDARD,
//     amenities: ["Wifi", "TV"],
//     isAvailable: true,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description: "Clean and modern standard room perfect for short stays.",
//   },
//   {
//     id: "RM-404",
//     title: "404",
//     price: 650,
//     capacity: 4,
//     category: categoryEnum.SUITE,
//     amenities: ["Wifi", "Dining Area", "Panoramic View"],
//     isAvailable: true,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description:
//       "Exclusive suite featuring a private dining area and panoramic views.",
//   },
//   {
//     id: "APT-109",
//     title: "Apt 109 - Cozy Courtyard",
//     price: 280,
//     capacity: 2,
//     category: categoryEnum.APARTMENT,
//     amenities: ["Wifi", "Kitchenette", "Garden Access"],
//     isAvailable: true,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1536376074432-cd22f30f0be8?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description:
//       "Quiet and peaceful courtyard apartment with direct garden access.",
//   },
//   {
//     id: "PH-502",
//     title: "PH 502 - Sky View Penthouse",
//     price: 1500,
//     capacity: 6,
//     category: categoryEnum.PENTHOUSE,
//     amenities: ["Private Elevator", "Kitchen", "Jacuzzi", "Helipad Access"],
//     isAvailable: true,
//     attachments: {
//       uploads: [
//         {
//           url: "https://images.unsplash.com/photo-1551133990-7ccc03b7ecaa?auto=format&fit=crop&q=80&w=400",
//         },
//       ],
//     },
//     description:
//       "Our most exclusive penthouse with a private elevator and jacuzzi.",
//   },
// ];



export interface Booking {
  bookingId: string;
  customerName: string;
  roomType: string;
  checkInDate: string; 
  checkOutDate: string; 
  stayDuration: number;
  status: string;

 
}

export const bookingData:Booking[]=[
  {
    "bookingId": "#BK-1001",
    "customerName": "James Anderson",
    "roomType": "Deluxe Suite",
    "checkInDate": "2024-03-15",
    "checkOutDate": "2024-03-18",
    "stayDuration": 3,
    "status": "Confirmed",
    // "totalPrice": 945,
    // "specialRequests": "Late check-out, Rose petals on bed"
  },
  {
    "bookingId": "#BK-1002",
    "customerName": "Sarah Chen",
    "roomType": "Standard King",
    "checkInDate": "2024-03-16",
    "checkOutDate": "2024-03-20",
    "stayDuration": 4,
    "status": "Checked-in",
    // "totalPrice": 680,
    // "specialRequests": "Extra pillows, High floor"
  },
  {
    "bookingId": "#BK-1003",
    "customerName": "Michael Okafor",
    "roomType": "Executive Suite",
    "checkInDate": "2024-03-14",
    "checkOutDate": "2024-03-17",
    "stayDuration": 3,
    "status": "Completed",
    // "totalPrice": 1050,
    // "specialRequests": "Airport pickup, Allergen-free room"
  },
  {
    "bookingId":"#BK-1004",
    "customerName": "Elena Rodriguez",
    "roomType": "Family Room",
    "checkInDate": "2024-03-18",
    "checkOutDate": "2024-03-22",
    "stayDuration": 4,
    "status": "Confirmed",
    // "totalPrice": 920,
    // "specialRequests": "Crib for infant, Connecting rooms"
  },

]
