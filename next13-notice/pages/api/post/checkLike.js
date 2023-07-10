import { connectDB } from "@/util/database";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  console.log(요청.query.id, "요청 쿼리 좋아요");
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
