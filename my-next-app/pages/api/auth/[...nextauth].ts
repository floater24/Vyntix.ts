import NextAuth from "next-auth";
import { authOptions } from "../../../src/auth/config";

export default NextAuth(authOptions());