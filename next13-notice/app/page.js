import { connectDB } from "@/util/database";

export default async function Home() {
  //const client = await connectDB; // 이렇게 변수로 선언안해도 아래처럼 사용 가능
  //const db = client.db("nextjsnotice");
  const db = (await connectDB).db("nextjsnotice");

  let result = await db.collection("post").find().toArray();
  console.log(result, "result");

  return <div>안녕하시려구려구려</div>;
}
