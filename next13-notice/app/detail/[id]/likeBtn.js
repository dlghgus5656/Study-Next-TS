"use client";

import { useEffect, useState } from "react";

export default function LikeBtn(postid) {
  const [likeCount, setLikeCount] = useState(0);
  const [state, setState] = useState(null);
  useEffect(() => {
    fetch("/api/post/checkLike?id=" + postid.postid)
      .then((r) => r.json())
      .then((data) => {
        setState(data.likeState);
        setLikeCount(data.likesCount);
      });
  }, [likeCount, state]);
  //
  return (
    <div>
      <button
        className={state === true ? "bg-orange-400" : null}
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
                alert("좋아요 실패");
                return false;
              }
            })
            .then((data) => {
              // data는 서버에서 응답받은 JSON 데이터입니다.
              console.log(data, "data");
              if (data === "좋아요 완료") {
                setState(true);
              } else {
                setState(false);
              }
              //   alert(data);
              return;
            })
            .catch((error) => {
              console.log(error);
            })
        }
      >
        {/* {state === true ? "좋아요 취소" : "좋아요"} */}
        좋아요 : {likeCount}
      </button>
    </div>
  );
}
