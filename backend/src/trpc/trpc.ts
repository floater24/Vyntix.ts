import { initTRPC } from "@trpc/server";
import type { inferAsyncReturnType } from "@trpc/server";

// tRPC のインスタンスを作成
const t = initTRPC.create();

// ルーターを定義
export const router = t.router;
export const publicProcedure = t.procedure;
