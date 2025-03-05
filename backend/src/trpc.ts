import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
export const appRouter = t.router({  // ✅ `router` から `appRouter` に変更
  hello: t.procedure
    .input(z.object({ name: z.string().optional() }))
    .query(({ input }) => {
      return { greeting: `Hello, ${input.name ?? "world"}!` };
    }),
});

// 🚀 型を `appRouter` に統一
export type AppRouter = typeof appRouter;

