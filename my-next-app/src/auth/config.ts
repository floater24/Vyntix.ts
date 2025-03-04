import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { AuthOptions, SessionStrategy } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db/client"; // ← バックエンド用DBを正しく参照！
 
const getEnvVar = (key: string): string => {
  const value = process.env[key];
  if (!value) throw new Error(`Missing environment variable: ${key}`);
  return value;
};

export const getAuthOptions = (): AuthOptions => ({
  providers: [
    GitHubProvider({
      clientId: getEnvVar("GITHUB_ID"),
      clientSecret: getEnvVar("GITHUB_SECRET"),
    }),
  ],
  adapter: DrizzleAdapter(db),
  session: { strategy: "database" as SessionStrategy },
  secret: getEnvVar("NEXTAUTH_SECRET"),
});
