import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
    };
    token: string;
  }
}

export const authOptions: NextAuthOptions = {
  pages: { signIn: "/login" },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let res = await fetch(`${process.env.API}/auth/signin`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        let payLoad = await res.json();
        console.log(payLoad);

        if (payLoad.message === "success") {
          const decodedToken: { id: string } = jwtDecode(payLoad.token);

          // رجّع user على طول + ضيف token
          return {
            id: decodedToken.id,
            name: payLoad.user.name,
            email: payLoad.user.email,
            role: payLoad.user.role,
            token: payLoad.token,
          };
        } else throw new Error(payLoad.err);
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          id: user.id as string,
          name: user.name as string,
          email: user.email as string,
          role: (user as any).role,
        };
        token.token = (user as any).token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as {
        id: string;
        name: string;
        email: string;
        role: string;
      };
      session.token = token.token as string;
      return session;
    },
  },
};
