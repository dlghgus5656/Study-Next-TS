"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// 1. 현재 UI의 상태를 cookie에 저장해둠 => 쿠키 생성은 다음 방법으로도 가능 1. 서버 API코드단 2. Middleware
export default function DarkMode({ mode }) {
  console.log(mode, "ejqiwjeqwo");
  // document.cookie = '이름=값'
  let router = useRouter();
  useEffect(() => {
    // mode라는 이름의 쿠키가 없을때만 실행
    let 쿠키값 = ("; " + document.cookie).split(`; mode=`).pop().split(";")[0];
    if (쿠키값 === "") {
      if (mode === "dark") {
        document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
      } else {
        document.cookie = "mode=dark; max-age=" + 3600 * 24 * 400;
      }
    }
  }, []);
  //   (참고)
  // document.cookie = 'mode=dark; max-age=' + (3600 * 24 * 400) + **'path=/'**
  // 쿠키생성시 뒤에 path를 적으면 원하는 /URL 접속시에만 해당 쿠키를 전송할 수 있는데
  // 특정 페이지에서는 서버로 쿠키전송이 안되면 path=/ 도 추가

  return (
    <span
      onClick={() => {
        mode === "light"
          ? (document.cookie = "mode=dark; max-age=" + 3600 * 24 * 400)
          : (document.cookie = "mode=light; max-age=" + 3600 * 24 * 400);
        router.refresh();
      }}
    >
      {mode === "light" ? "🌙" : "☀️"}
    </span>
  );
}
