import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div className="flex flex-row gap-6">
            <div>
              <Link href="/">
                <h2>main 페이지</h2>
              </Link>
            </div>
            <div>
              <Link href="/list">
                <h2>list 페이지</h2>
              </Link>
            </div>
            <div>
              <Link href="/write">
                <h2>글작성 페이지</h2>
              </Link>
            </div>
            <div>
              <Link href="/sign">
                <h2>회원가입 페이지</h2>
              </Link>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
