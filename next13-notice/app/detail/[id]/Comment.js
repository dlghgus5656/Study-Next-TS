"use client";

import { useEffect, useState } from "react";

export default function Comment(result) {
  let [comment, setComment] = useState("");
  let [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let postInfo = result.result;
  // useEffect특징 - html 로드/ 재렌더링될 때 마다 실행됨
  // 댓글 수정 전
  useEffect(() => {
    // 서버에서 댓글 가져오기
    // 1. 컴포넌트 로드시 서버에서 댓글 가져옴
    // 2. 가져온 데이터를 state에 저장해둠
    // 3. state를 html에 꽂아서 보여줌

    // 아래 GET요청시 데이터 함께 보내려면 크게 두가지 방법이 있다.
    // URL parameter 과 query string 아래에선 조금 더 간단한 query string방법을 사용한다.
    fetch("/api/comment/commentList?id=" + postInfo._id)
      .then((r) => r.json())
      .then((data) => {
        setCommentData(data);
        setIsLoading(false);
      });
  }, []);

  // 댓글 수정 후
  useEffect(() => {
    // 댓글이 저장되면
    // 댓글 목록을 새로 가져와 화면에 업데이트
    return () => {
      fetch("/api/comment/commentList?id=" + postInfo._id)
        .then((r) => r.json())
        .then((data) => {
          setCommentData(data);
        });
    };
  }, [commentData]);
  // todo 댓글 작성자 이메일 말고 이름으로 출력해도 좋을듯?
  // ! 하지만 관계형 db에 작성자 이름을 같이 저장하는건 안좋을 수 있다.
  return (
    <div>
      <div className="flex mb-2">아래는 댓글 목록 보여주는 부분</div>

      {isLoading ? (
        <div>Loding...</div>
      ) : (
        <div>
          {commentData.map((arr, i) => {
            return (
              <div key={i}>
                {arr.content} (작성자 : {arr.author})
              </div>
            );
          })}
        </div>
      )}
      <input
        className="flex mt-2"
        placeholder="댓글을 입력하세요"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />

      <button
        onClick={() => {
          fetch("/api/comment/comment", {
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
                setCommentData([...commentData, data]);

                alert("댓글입력 완료");
                // return;

                // location.reload();
                // return alert("댓글입력 완료");
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
