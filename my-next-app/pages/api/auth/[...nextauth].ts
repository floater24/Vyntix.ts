import NextAuth from "next-auth";
import { getAuthOptions } from "../../../src/auth/config"; // `getAuthOptions` を正しく import！

export default NextAuth(getAuthOptions());
