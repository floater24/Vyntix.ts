import NextAuth, { AuthOptions, SessionStrategy } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "../../../../backend/src/db/client";



export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt" as SessionStrategy }, // ← ここで型を明示！
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
