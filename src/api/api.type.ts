export enum Role {
    USER ="USER",
    ADMIN="ADMIN"
}


export type AuthState = {
  token: string;
  role?: Role;
  success?: boolean;
  hotelId?: string;
  isVerified?: boolean;
};