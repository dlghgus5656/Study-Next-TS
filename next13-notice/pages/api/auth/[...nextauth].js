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
};
export default NextAuth(authOptions);
