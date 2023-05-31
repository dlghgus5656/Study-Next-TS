"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DetailLink() {
  let router = useRouter(); // next의 Link를 쓰면 편하지만 useRouter을 사용하면 다양한 기능을 쓸 수 있기때문에 필요에 따라 사용하자
  let pathName = usePathname(); // 현재 URL 출력은 usePathname()
  let searchParams = useSearchParams(); // Search parameter 출력은 useSearchParams()

  return (
    <div className="flex gap-5 ">
      <button
        className="border-red-100 border-[3px]"
        onClick={() => {
          router.push("/");
        }}
      >
        버튼
      </button>
      <button
        className="border-red-100 border-[3px]"
        onClick={() => {
          router.back();
        }}
      >
        뒤로가기버튼
      </button>
      <button
        className="border-red-100 border-[3px]"
        onClick={() => {
          router.forward();
        }}
      >
        앞으로가기버튼
      </button>
      <button
        className="border-red-100 border-[3px]"
        onClick={() => {
          router.refresh(); // 브라우저 전체 새로고침이 아니라 바뀐내용만 새로고침 함
          // 더 궁금하면 Next의 soft refresh 기능 찾아보기
        }}
      >
        새로고침버튼
      </button>
      <button
        className="border-red-100 border-[3px]"
        onClick={() => {
          router.prefetch("/"); // 페이지 미리로드하기 : 실행시 해당 url 페이지 로드에 필요한 모든 파일들을 미리 로드시켜줌 따라서 해당페이지를 방문할때 매우 빠르게 방문하는게 가능하다.
          // * Next의 Link태그는 위 prefetch 기능을 이미 포함하고 있다.
        }}
      >
        페이지미리로드버튼
      </button>
    </div>
  );
}
