import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions); // api에서 사용시 요청, 응답도 넣어주어야 한다.
  if (session) {
    요청.body.author = session.user.email;
  }

  if (요청.method == "POST") {
    if (요청.body.title === "") {
      return 응답.status(500).json("제목을 입력해 주세요.");
    } else if (요청.body.content === "") {
      return 응답.status(500).json("내용을 입력해 주세요.");
    }
    try {
      const db = (await connectDB).db("nextjsnotice");
      let result = await db.collection("post").insertOne(요청.body);
      return 응답.redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
  }
}
