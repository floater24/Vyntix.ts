import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../src/trpcFront"; // ✅ 修正

export const trpcClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "https://vyntix-ts.fly.dev/trpc", // ✅ Fly.io の API エンドポイント
    }),
  ],
});
