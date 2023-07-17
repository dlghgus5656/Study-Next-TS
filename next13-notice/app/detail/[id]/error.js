"use client";

// props에 error과 reset이 들어온다.
export default function Error({ error, reset }) {
  // error - 에러 정보
  // reset - 페이지 다시시도
  // Nextjs 에선 이렇게 page별로 error을 보여줄 수 있어서 다른 레이아웃을 해치지 않고 에러 화면을 부분 출력 가능하단 장점이 있다.
  // (참고) error.js가 page.js 옆에 없으면 상위폴더들을 탐색한다. (app폴더에 바로 두면 모든 페이지에서 공유한다 이 에러 페이지를)
  return (
    <div>
      <h1 className="text-red-500"> 에러가 발생했습니다!!</h1>
      <button
        onClick={() => {
          reset();
        }}
      >
        다시 시도
      </button>
    </div>
  );
}
