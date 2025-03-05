import Elysia from "elysia";
import { initTRPC } from "@trpc/server";
import { z } from "zod";

const port = process.env.PORT || 8080;

// tRPC のセットアップ
const t = initTRPC.create();

// tRPC ルーターの設定
const appRouter = t.router({
  "auth.login": t.procedure
    .input(z.object({ email: z.string().email() })) // 型チェックを追加
    .query(({ input }) => {
      return { message: `Logged in as ${input.email}` };
    }),
});

// Elysia に tRPC を適用
const app = new Elysia()
  .get("/", () => "Hello, World! 🚀")
  .get("/health", () => "OK") // ヘルスチェック用
  .get("/trpc/auth.login", async ({ query }) => {
    // 仮のリクエスト処理
    if (!query.email) {
      return { error: "Email is required" };
    }
    return { message: `Logged in as ${query.email}` };
  })
  .listen(port);

console.log(`🚀 Server running on port ${port}`);
