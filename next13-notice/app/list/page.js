import { connectDB } from "@/util/database";
// import Link from "next/link";
// import DetailLink from "./DetailLink";
import ListItem from "./ListItem";
// 클라이언트 컴포넌트인 DetailLink를 불러와서 현재 서버컴포넌트에 함께 사용할 수 있다.
export default async function List() {
  const db = (await connectDB).db("nextjsnotice");
  // awiat을 사용하는 이유는 작업이 오래 걸리는 명령어 일 경우 컴퓨터가 자체적으로 뒷 순서로 작업을 미루는데 이를 막기 위해서 사용한다.
  // MongoDB측에서 mongodb관련 명령어에는 await을 사용해서 써라 라고 해서 쓴다 라는 정도로만 알고있어도 괜찮다.
  let result = await db.collection("post").find().toArray(); // Promise 반환하는 코드만 await 붙이기 가능

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
