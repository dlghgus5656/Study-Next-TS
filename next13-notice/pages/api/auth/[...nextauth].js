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
// DB adapter 기능을 켜놓으면

// 1. 첫 로그인시 자동으로 유저를 회원가입 시켜서 DB에 유저 회원정보를 보관해줍니다.

// 2. 로그인시 자동으로 유저가 언제 로그인했는지 세션정보를 DB에 보관해줍니다.

// 3. 서버에서 지금 로그인된 유저정보가 필요하면 JWT가 아니라 DB에 있던 세션정보를 조회해서 가져옵니다.

// 4. 로그아웃시 유저 세션정보는 DB에서 삭제됩니다.
export default NextAuth(authOptions);
