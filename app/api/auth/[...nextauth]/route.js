import NextAuth from "next-auth";
import { options } from "./options";
import authoptions from "next-auth"

const handler = NextAuth(options);
export { handler as GET, handler as POST, authoptions };
