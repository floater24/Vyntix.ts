import { publicProcedure, router } from "../trpc/trpc";
import { z } from "zod";
import { createId } from "@paralleldrive/cuid2";
import { db } from "../auth/db/client";
import { authOptions } from "../auth/config";
import { getServerSession } from "next-auth/next";


export const authRouter = router({
  login: publicProcedure
    .input(z.object({ email: z.string().email() })) // 👈 ここで明示的に型を指定
    .mutation(async ({ input }) => {
      const user = await db.query.users.findFirst({
        where: (user, { eq }) => eq(user.email, input.email),
      });

      if (!user) {
        throw new Error("User not found");
      }

      return { sessionToken: createId() };
    }),

  me: publicProcedure.query(async () => {
    const session = await getServerSession(authOptions());
    return session?.user ?? null;
  }),
});
