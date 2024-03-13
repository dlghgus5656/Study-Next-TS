'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    //선택적으로 오류 보고 서비스에 오류를 기록합니다.
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="px-4 py-2 mt-4 text-sm text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-400"
        onClick={
          // 송장 경로를 다시 렌더링하여 복구를 시도합니다.
          () => reset()
        }
      >
        Try again!
      </button>
    </main>
  );
}
