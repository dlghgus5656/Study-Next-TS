import { connectDB } from "@/util/database";

// revalidate 예약변수 사용하면 페이지단위 캐싱 가능 - 예전 next.js에선 ISR이라고 불렀다.
export const revalidate = 60;

export default async function Home() {
  //const client = await connectDB; // 이렇게 변수로 선언안해도 아래처럼 사용 가능
  //const db = client.db("nextjsnotice");
  // const db = (await connectDB).db("nextjsnotice");

  // let result = await db.collection("post").find().toArray();
  // console.log(result, "result");

  // await fetch("/URL", { cache: "force-cache" }); // 캐싱기능 사용 - 가져온거 재활용
  // await fetch("/URL", { cache: "no-store" }); // 캐싱기능 미사용 - 매번 서버로 요청해서 새거 가져옴 (실시간 기능이 중요하면 사용하면됨)
  // await fetch("/URL", { next: { revalidate: 60 } }); // 60초 마다 캐싱된 데이터 갱신해줌 (인증번호 시간 제한 느낌?, 실시간까진 안필요한 데이터에 사용해줘도 자원 절약할 수 있음)

  return <div>안녕하시려구려구려</div>;
}
