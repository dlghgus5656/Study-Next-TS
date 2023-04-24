import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

// * 폴더 이름을 () 로 감싸면 url경로에 영향을 주지 않고 그룹화 시킬 수 있다. 즉 여기선 /test가 주소가 아니라 /testsite가 주소가 된다.

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        <Link href="/users">Users</Link>
      </p>
    </main>
  );
}
