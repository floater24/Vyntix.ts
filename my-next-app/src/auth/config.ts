import { PgDatabase } from "drizzle-orm/pg-core";
import  { AuthOptions, SessionStrategy } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter"; // ✅ `require()` をやめて `import` を使う！

import { db } from "./db/client"; // ← バックエンド用DBを正しく参照！
import * as schema from "./db/schema"; // Drizzle 用のスキーマを使用

 
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
  adapter: DrizzleAdapter(db as unknown as PgDatabase<never, typeof schema>),
  session: { strategy: "database" as SessionStrategy },
  secret: getEnvVar("NEXTAUTH_SECRET"),
  pages: {
    signIn: "/auth/signin",  // ✅ ここを `/api/auth/signin` ではなく `/auth/signin` に！
    error: "/auth/error", 
  },
});
