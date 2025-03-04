import dotenv from "dotenv";
import path from "path";
import { NeonHttpDatabase } from "drizzle-orm/neon-http";

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

// .env.local を強制的にロード
dotenv.config({ path: path.resolve(__dirname, "../../.env.local") });

console.log("DATABASE_URL after dotenv:", process.env.DATABASE_URL);

console.log("DATABASE_URL:", process.env.DATABASE_URL);

const sql = neon(process.env.DATABASE_URL|| (() => { throw new Error("Missing DATABASE_URL") })(),); // SSL モードを明示

export const db: NeonHttpDatabase<typeof schema> = drizzle(sql, { schema });
