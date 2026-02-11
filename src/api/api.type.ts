export enum Role {
    GUEST ="GUEST",
    HOST="HOST",
    ADMIN="ADMIN"
}


export type AuthState = {
  token?: string;
  role?: Role;
  success?: boolean;
  hotelId?: string;
  isVerified?: boolean;
};