import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);
  if (요청.method === "POST") {
    const result = JSON.parse(요청.body);
    console.log(result, "result 요청.body"); // 요청.body에 키값이 string값으로 들어와서 요청.body.content같은거 못썼는데 해결함
    console.log(session, "session");
    console.log(result.parentid, "result");
    if (session === null) {
      return 응답.status(500).json("댓글 입력실패: 로그인 안함");
    } else if (result.content === "") {
      return 응답.status(500).json("댓글 입력실패: 내용입력 안함");
    } else {
      try {
        let 저장할거 = {
          content: result.content,
          author: session.user.email,
          parent: new ObjectId(result.parentid),
        };

        const db = (await connectDB).db("nextjsnotice");
        let saveComment = await db.collection("comment").insertOne(저장할거);

        return 응답.status(200).json("댓글 저장완료");
      } catch (error) {
        console.log(error, "error");
      }
    }
    // if (result.content === "") {
    //   console.log("jifnsdoighfjqoife??????");
    //   return 응답.status(500).json("댓글 입력실패: 내용 입력안함");
    // }
    // // else if (result.author === "") {
    // //   return 응답.status(300).json("로그인 후 사용 가능합니다.");
    // // }

    // try {
    //   const db = (await connectDB).db("nextjsnotice");

    //   let saveComment = await db.collection("comment").insertOne(result);
    //   console.log(saveComment, "saveComment");
    //   응답.status(200).json("댓글 입력완료");
    //   return 응답.redirect(302, "/list");
    // } catch (error) {
    //   console.log(error);
    // }
  }
}
