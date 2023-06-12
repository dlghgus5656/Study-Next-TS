"use client";

import DetailLink from "./DetailLink";
import Link from "next/link";

export default function ListItem({ result }) {
  // useEffect(() => {
  //  가져올 데이터
  // },[])
  // 클라이언트 컴포넌트에서 이런식으로 useEffect를 사용하면 검색 노출이 어려울 수 있다. 검색엔진 봇들이 우리의 html이 그려지기 전에 들렸다 가서 텅빈 정보만을 보게 되기 때문이다.
  // 따라서 검색노출이 중요한 페이지는 부모 서버컴포넌트에서 필요한 값을 props로 넘겨 받는게 좋다.
  return (
    <div>
      {result.map((list, i) => {
        return (
          <div className="list-item" key={i}>
            {/* 아래 Link태그에는 미리 페이지를 로드해주는 prefetch 기능이 자동으로 포함되어있다.
            만약 게시판같이 쓸데없이 페이지를 미리 로드하기 싫다면 태그에 prefetch={false} 를 써주자. 
            추가로 개발중일땐 prefetch 여부 확인불가하고 나중에 사이트를 발행하면 확인 가능하다.
            */}
            <div className="flex flex-row gap-2">
              <Link prefetch={false} href={`/detail/${list._id}`}>
                <h4>
                  {list.title}
                  {/* (id: {list._id}) */}
                </h4>
              </Link>
              <Link href={`/edit/${list._id}`}>수 정</Link>

              <span
                onClick={() => {
                  fetch("/api/post/delete", {
                    method: "POST",
                    body: list._id, // 배열이나 오브젝트는 JSON.stringify로 보내주기
                  })
                    .then((r) => {
                      if (r.status === 200) {
                        return r.json();
                      } else {
                        // 서버가 에러코드 전송시 실행할 코드
                        console.log(r);
                      }
                    })
                    .then((result) => {
                      // 성공시 실행할 코드
                      console.log(result);
                    })
                    .catch((error) => {
                      // 인터넷문제로 실패시 실행할 코드
                      console.log(error);
                    });
                  //   .then(() => {
                  //     console.log(result._id, "list._id 삭제 성공");
                  //   });
                }}
              >
                삭 제
              </span>
            </div>
            <DetailLink />
            <p>1월 1일</p>
            <span>{list.content}</span>
          </div>
        );
      })}
    </div>
  );
}
