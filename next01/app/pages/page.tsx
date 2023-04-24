import Link from "next/link";

export default function About() {
  //throw new Error("Not today!!!"); // 에러 테스트
  return (
    <>
      <h1 className="text-green-300 text-h1">Hello About!!!</h1>
      <Link href="/">Link to Home Page</Link>
    </>
  );
}
