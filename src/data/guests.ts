export interface Guest {
  id: string;
  name: string;
  email: string;
  totalBookings: number;
  loyaltyStatus: "Gold" | "Silver" | "Bronze" | "Regular" | "Platinum";
  avatar: string;
  phone: string;
}

export const guestsData: Guest[] = [
  {
    id: "#G-49210",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    totalBookings: 5,
    loyaltyStatus: "Gold",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuByQDIvCuj-hCAYicbt433s--6ONG_Ngl8uX3pheY5TAuHt1FegSOGVzaZDt_NBODWJFiPr9M5PUeeXohuSlD1kPHxxSQJS95c2osziymiiMXqsyOPiHpIvCgnXEGHGhQE_NljkvWXRarVSPBGEqtzJ_QGDgg7EjBANsWAWCeqqot8_uojF__a_69E4QTBLM2g-X4r_Jl2IHRDvK8vWSWpPlGcc8nOb784Cns_1Dx0Mn_VwfHZDL6CsbUJAymepLeDcn8oyzNB6eaCa",
    phone: "+1 234 567 8901",
  },
  {
    id: "#G-49211",
    name: "John Smith",
    email: "j.smith@provider.net",
    totalBookings: 1,
    loyaltyStatus: "Bronze",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYIsc7keX8DYgo34hKnFErKMP6IHfEJnC9QGE7MTLjy-tc07GD8ZIGeNbm76FJ6y19vCZt3JPLFzo3wLoR1iIi6Tv2L4Nhuy8thAZrkbIZPTiyONn2DdGwDYGP4dpNOc1wxfofU5Ae4EWHkJ8c0ZhxfHRdZs_tK9VU-cljlJWaYEZqwxYyEV32Dv8-sxff5FGbqdY3CShogJ2_r8Nag9MESjpBcyi0nddyf-CuJOShnWQV6orwdHZO-3Zk64xHtmFhS_cHbc-p0_QS",
    phone: "+1 234 567 8902",
  },
  {
    id: "#G-49212",
    name: "Maria Garcia",
    email: "m.garcia@outlook.com",
    totalBookings: 12,
    loyaltyStatus: "Silver",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAokiVrcktnmIawWLZV5WLKSJQCi0-MJxZkj8gRgi2wSJQp-JyUl8iNiQy6GmlQhx4yMd6OGKWNDhSU8Hj4KLmaxVIGRWCrrcIAI0_Eyh7fVsPuh19pa0lfJvZzUs4Qwx6PBM3GPDrvi4Ahuf_58krdMC4iqvBiUdQ_zgZrUOQ7_kOi6YzqWhKGM-lDcz7PSoK4jWFnzria5NTXee_En3wk-1nUSnYHePESgvWuI3Nod8EgABlSxz29wFBR3UwT_bfK3OFgF6IPC_iA",
    phone: "+1 234 567 8903",
  },
  {
    id: "#G-49213",
    name: "Robert Chen",
    email: "robert.chen@corp.com",
    totalBookings: 3,
    loyaltyStatus: "Gold",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDILka2uhbPmBjVgg-y2fgG4UYxePbCG0qhk9JgM3sp0zw2t30vFQw29Chuk0zhzWTN_5N5OiWeAObYjqx7wiaMZ1J0ivo-QygVmVKQoBQr3d7wrcsI67aysSridUQNLliihDIXPNUvTgSxwJUtpnjRTdDu_dcI99ZPSQeO33AE88K7YtugaA0c9NPCPPmeMvjN73DENCmcc82m-XeuQk_6hKQCxNdfGPmQwgUwNnNcpWfyvIIuaJVZSf76uxXXbS79jlQb6eJf_tBt",
    phone: "+1 234 567 8904",
  },
  {
    id: "#G-49214",
    name: "Sarah Williams",
    email: "sarah.w@gmail.com",
    totalBookings: 8,
    loyaltyStatus: "Platinum",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    phone: "+1 234 567 8905",
  },
  {
    id: "#G-49215",
    name: "Michael Scott",
    email: "m.scott@dundermifflin.com",
    totalBookings: 2,
    loyaltyStatus: "Regular",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
    phone: "+1 234 567 8906",
  },
  {
    id: "#G-49216",
    name: "Pam Beesly",
    email: "pam.b@dundermifflin.com",
    totalBookings: 4,
    loyaltyStatus: "Silver",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
    phone: "+1 234 567 8907",
  },
  {
    id: "#G-49217",
    name: "Jim Halpert",
    email: "jim.h@dundermifflin.com",
    totalBookings: 6,
    loyaltyStatus: "Gold",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
    phone: "+1 234 567 8908",
  },
];
