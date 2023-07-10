"use client";

import { useEffect, useState } from "react";

export default async function LikeBtn(postid) {
  const [likeCount, setLikeCount] = useState(0);
  useEffect(() => {
    // 서버에서 댓글 가져오기
    // 1. 컴포넌트 로드시 서버에서 댓글 가져옴
    // 2. 가져온 데이터를 state에 저장해둠
    // 3. state를 html에 꽂아서 보여줌

    // 아래 GET요청시 데이터 함께 보내려면 크게 두가지 방법이 있다.
    // URL parameter 과 query string 아래에선 조금 더 간단한 query string방법을 사용한다.
    fetch("/api/post/checkLike?id=" + postid.postid)
      .then((r) => r.json())
      .then((data) => {
        setLikeCount(data.likesCount);
      });
  }, []);
  console.log(likeCount, "likeCount");
  return (
    <div>
      <button
        onClick={() =>
          fetch("/api/post/likePost", {
            method: "POST",
            body: postid.postid,
          })
            .then((r) => {
              if (r.status === 200) {
                return r.json();
              } else {
                // 서버가 에러코드 전송시 실행할 코드
                alert("입력 실패");
                return false;
              }
            })
            .then((data) => {
              // data는 서버에서 응답받은 JSON 데이터입니다.
              alert(data);
            })
            .catch((error) => {
              console.log(error);
            })
        }
      >
        좋아요: {likeCount}
      </button>
    </div>
  );
}
