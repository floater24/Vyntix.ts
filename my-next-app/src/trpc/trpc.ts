import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

// ここで router を定義
export const router = t.router;
export const publicProcedure = t.procedure;
