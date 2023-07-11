import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions); // api에서 사용시 요청, 응답도 넣어주어야 한다./ 로그인한 사용자 정보가 필요할때 사용?
  console.log(session.user.email, "session");
  console.log(요청.query.id, "요청 쿼리 좋아요");
  const likeCheck = await db.collection("likespost").findOne({});
  //     if (session === null) {
  //     return 응답.status(500).json("좋아요 실패: 로그인 안함");
  //   } else {

  //   }
  try {
    // 좋아요 내역을 저장하는 컬렉션을 생성합니다.
    const db = (await connectDB).db("nextjsnotice");
    // 게시물의 좋아요 수를 조회하려면 다음과 같은 문법을 사용합니다.
    let likesCount = await db.collection("likespost").count({
      post_id: 요청.query.id,
    });
    console.log(likesCount, "likesCount");
    return 응답.status(200).json({ likesCount });
  } catch (error) {
    console.log(error);
  }
}
