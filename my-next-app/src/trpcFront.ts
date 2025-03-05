import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@backend/trpc"; // ✅ `backend` の型だけ参照！

export const trpcReact = createTRPCReact<AppRouter>(); // ✅ `trpc` ではなく `trpcReact` に変更！
export type {AppRouter}