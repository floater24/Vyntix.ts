import { NextApiRequest, NextApiResponse } from "next";
import { signIn } from "next-auth/react";

export default function SignInApi(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.redirect("/api/auth/signin/github"); // ✅ GitHub 認証にリダイレクト！
  }
  return res.status(405).end(); // ✅ `GET` 以外はメソッドエラー！
}
