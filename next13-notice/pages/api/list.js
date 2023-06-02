import { connectDB } from "@/util/database";

export default async function allList(요청, 응답) {
  const db = (await connectDB).db("nextjsnotice");

  let result = await db.collection("post").find().toArray();

  return 응답.status(200).json(result); // api를 호출한 후 응답을 받고 싶으면 사용하자
}
