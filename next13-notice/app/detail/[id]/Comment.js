"use client";

import { useEffect, useState } from "react";

export default function Comment(result) {
  let [comment, setComment] = useState("");
  let postInfo = result.result;

  // useEffect특징 1. html 로드/ 재렌더링될 때 마다 실행됨
  useEffect(() => {
    // 서버에서 댓글 가져오기
    // 1. 컴포넌트 로드시 서버에서 댓글 가져옴
    // 2. 가져온 데이터를 state에 저장해둠
    // 3. state를 html에 꽂아서 보여줌
    fetch();
  }, []);

  return (
    <div>
      <div>댓글 목록 보여주는 부분</div>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/api/post/comment", {
            method: "POST",
            body: JSON.stringify({
              content: comment,
              // author: postInfo.author, // 게시물 작성자 이메일
              parentid: postInfo._id,
            }),
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
              console.log(data, "data");
              if (data !== false) {
                // 성공시 실행할 코드
                return alert("댓글입력 완료");
              } else return alert("내용을 입력해주세요.");
            })
            .catch((error) => {
              console.log(error);
              // error는 서버에서 응답받은 에러입니다.
            });
        }}
      >
        댓글 입력
      </button>
    </div>
  );
}
