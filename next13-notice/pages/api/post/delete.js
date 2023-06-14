import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    let session = await getServerSession(요청, 응답, authOptions); // 로그인한 사용자 정보 가져오기 / api에서 사용시 요청, 응답도 넣어주어야 한다.
    console.log(session, "ewjhuioqweuiwqheiuqjw");

    try {
      //   console.log(요청.body, "요청"); // ListItem에서 요청.body 값이 안넘어옴;;
      const db = (await connectDB).db("nextjsnotice");
      let result = await db
        .collection("post")
        .findOne({ _id: new ObjectId(요청.body) });
      console.log(result, "eqwjie");
      if (result.author === session.user.email) {
        let deleteResult = await db
          .collection("post")
          .deleteOne({ _id: new ObjectId(요청.body) });
        return 응답.status(200).json("삭제완료");
      } else {
        return 응답.status(500).json("삭제실패: 현재유저와 글 작성자 불일치");
      }
      //   return 응답.redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
  }
}
