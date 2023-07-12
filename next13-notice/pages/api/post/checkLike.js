import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions); // api에서 사용시 요청, 응답도 넣어주어야 한다./ 로그인한 사용자 정보가 필요할때 사용?
  console.log(session.user.email, "session");
  console.log(요청.query.id, "요청 쿼리 좋아요");

  if (session === null) {
    return 응답.status(500).json("좋아요 실패: 로그인 안함");
  } else {
  }
  try {
    // nextjsnotice db에 연결
    const db = (await connectDB).db("nextjsnotice");

    // 게시물의 좋아요 수를 조회하려면 다음과 같은 문법을 사용합니다.

    let likeState = false;
    const likeCheck = await db
      .collection("likespost")
      .findOne({ user_id: session.user.email, post_id: 요청.query.id });
    console.log(likeCheck, "likeCheck");
    if (likeCheck) {
      likeState = true;
    } else {
      likeState = false;
    }
    console.log(likeState, "likeState");

    let likesCount = await db.collection("likespost").count({
      post_id: 요청.query.id,
    });
    console.log(likesCount, "likesCount");
    return 응답.status(200).json({ likesCount, likeState });
  } catch (error) {
    console.log(error);
  }
  return;
}
// todo 좋아요 재 클릭시 좋아요 취소하기?

// 게시물 아이디와 유저 아이디 를 검색해서 일치하는게 나온다면 그 문서를 삭제해준다 아니라면 pass 그리고 마지막에 count 구해서 보내주면 될 듯?
