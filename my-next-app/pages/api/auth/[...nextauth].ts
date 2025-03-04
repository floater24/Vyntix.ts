import NextAuth from "next-auth";
import { getAuthOptions } from "../../../src/auth/config";

export default NextAuth(getAuthOptions());