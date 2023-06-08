import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    let updateContent = { title: 요청.body.title, content: 요청.body.content };

    if (요청.body.title === "") {
      return 응답.status(500).json("제목을 입력해 주세요.");
    } else if (요청.body.content === "") {
      return 응답.status(500).json("내용을 입력해 주세요.");
    }
    try {
      const db = (await connectDB).db("nextjsnotice");
      await db.collection("post").updateOne(
        { _id: new ObjectId(요청.body._id) },
        { $set: updateContent }
        // $set 말고 $inc를 사용하면 기존 값에서 증감시키는것도 가능하다 (ex: 123에서 +1만 더해줄 수 있음)
      );
      return 응답.redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
  }
}
