import NextAuth from "next-auth";
import { getAuthOptions } from "../../../src/auth/config";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Auth request received:", req.url);
  return NextAuth(req, res, getAuthOptions());
}
