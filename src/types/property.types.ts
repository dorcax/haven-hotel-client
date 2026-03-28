export interface Property {
  id: string | number;
  type: "HOTEL" | "APARTMENT";
  location: string;
  price: number;
  name: string;
  description?: string;
  features: string | string[];
  attachments: {
    uploads?: Array<{
      url: string;
      alt?: string;
    }>;
  };
}
