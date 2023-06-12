import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    try {
      console.log(요청.body, "요청"); // ListItem에서 요청.body 값이 안넘어옴;;
      const db = (await connectDB).db("nextjsnotice");
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(요청.body) });
      if (result.deletedCount !== 0) {
        return 응답.status(200).json("삭제완료");
      } else {
        return 응답.status(500).json("삭제실패");
      }
      //   return 응답.redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
  }
}
