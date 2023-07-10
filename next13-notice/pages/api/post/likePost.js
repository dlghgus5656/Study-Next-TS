import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions); // api에서 사용시 요청, 응답도 넣어주어야 한다./ 로그인한 사용자 정보가 필요할때 사용?
  console.log(session.user.email, "session");
  console.log(요청.body, "postID");

  if (session === null) {
    return 응답.status(500).json("좋아요 실패: 로그인 안함");
  } else if (요청.body === "") {
    return 응답.status(500).json("좋아요 실패: 게시물을 찾을 수 없음");
  } else {
    try {
      // 좋아요 내역을 저장하는 컬렉션을 생성합니다.
      const db = (await connectDB).db("nextjsnotice");
      const likesPost = await db.collection("likespost");
      // console.log(
      //   likesPost.find({
      //     user_id: session.user.email,
      //     post_id: 요청.body,
      //   }),
      //   "eeeeeeeee"
      // );
      // likesPost.find({
      //   user_id: session.user.email,
      //   post_id: 요청.body,
      // });

      //유저가 게시물을 좋아요 누를 때, 다음과 같은 문법을 사용하여 좋아요 내역을 저장합니다.
      await likesPost.insertOne({
        user_id: session.user.email,
        post_id: 요청.body,
      });

      return 응답.status(200).json("좋아요 저장");
    } catch (error) {
      console.log(error);
    }
  }
}
// todo 좋아요 기능 개발하기
