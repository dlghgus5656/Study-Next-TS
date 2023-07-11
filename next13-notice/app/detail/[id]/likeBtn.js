"use client";

import { useEffect, useState } from "react";

export default function LikeBtn(postid) {
  const [likeCount, setLikeCount] = useState(0);
  const [state, setState] = useState(false);
  useEffect(() => {
    fetch("/api/post/checkLike?id=" + postid.postid)
      .then((r) => r.json())
      .then((data) => {
        setLikeCount(data.likesCount);
        console.log(data.likesCount, "data.likesCount");
      });
  }, [likeCount, state]);
  console.log(state, "state");
  //
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
              setState(true);
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
