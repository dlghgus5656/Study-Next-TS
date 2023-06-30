"use client";

import { useState } from "react";

export default function Comment(result) {
  let [comment, setComment] = useState("");
  let postInfo = result.result;
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
          console.log(comment, "ejwi");
          fetch("/api/post/comment", {
            method: "POST",
            body: JSON.stringify({
              content: comment,
              author: postInfo.author,
              parentid: postInfo._id,
            }),
          });
        }}
      >
        댓글 입력
      </button>
    </div>
  );
}
