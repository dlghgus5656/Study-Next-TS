import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  // console.log(요청.query, "요청 쿼리");

  const db = (await connectDB).db("nextjsnotice");
  let result = await db
    .collection("comment")
    .find({ parent: new ObjectId(요청.query.id) })
    .toArray();

  // console.log(result, "resulttttt");
  return 응답.status(200).json(result);
}
