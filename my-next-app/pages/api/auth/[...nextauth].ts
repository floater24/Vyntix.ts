import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import { getAuthOptions } from "../../../src/auth/config";

export default function authHandler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Auth request:", req.url);

  return NextAuth(req, res, {
    ...getAuthOptions(),
    pages: {
      signIn: "/auth/signin",
      error: "/auth/error",
    },
  });
}

