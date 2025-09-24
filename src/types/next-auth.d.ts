import NextAuth , {User} from "next-auth";
import { JWT } from "next-auth/jwt"
import { extend } from "zod/v4-mini";

declare module "next-auth" {
  interface User {
    user: {
      name: string;
      email: string;
      role: string;
      id: string;
    };
    token: string;
  }

  interface Session {
    user: User["user"];
  }
}




declare module "next-auth/jwt" {
  interface JWT extends User {
    idToken?: string
  }
}