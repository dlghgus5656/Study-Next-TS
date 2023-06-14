import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "7f77b1d52bb71f58cd8a",
      clientSecret: "de7ba5282d5d2f9d8e10efeede861259c81bd450",
    }),
  ],
  secret: "1234qwer",
  adapter: MongoDBAdapter(connectDB), // 다른 DB 쓰려면 다른 DB adapter 찾아서 사용하면 됨
};
export default NextAuth(authOptions);
