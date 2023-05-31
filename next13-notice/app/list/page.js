import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
// 클라이언트 컴포넌트인 DetailLink를 불러와서 현재 서버컴포넌트에 함께 사용할 수 있다.
export default async function List() {
  const db = (await connectDB).db("nextjsnotice");
  // awiat을 사용하는 이유는 작업이 오래 걸리는 명령어 일 경우 컴퓨터가 자체적으로 뒷 순서로 작업을 미루는데 이를 막기 위해서 사용한다.
  // MongoDB측에서 mongodb관련 명령어에는 await을 사용해서 써라 라고 해서 쓴다 라는 정도로만 알고있어도 괜찮다.
  let result = await db.collection("post").find().toArray(); // Promise 반환하는 코드만 await 붙이기 가능
  console.log(result, "리스트데이터");
  console.log(result[1].title, "제목만 가져오기");
  console.log(result[1]._id, "id만 가져오기");

  return (
    <div className="list-bg">
      {result.map((list, i) => {
        return (
          <div className="list-item" key={i}>
            {/* 아래 Link태그에는 미리 페이지를 로드해주는 prefetch 기능이 자동으로 포함되어있다.
            만약 게시판같이 쓸데없이 페이지를 미리 로드하기 싫다면 태그에 prefetch={false} 를 써주자. 
            추가로 개발중일땐 prefetch 여부 확인불가하고 나중에 사이트를 발행하면 확인 가능하다.
            */}
            <Link prefetch={false} href={`/detail/${list._id}`}>
              <h4>
                {list.title} (id: {list._id})
              </h4>
            </Link>

            <DetailLink />
            <p>1월 1일</p>
            <span>{list.content}</span>
          </div>
        );
      })}
    </div>
  );
}
