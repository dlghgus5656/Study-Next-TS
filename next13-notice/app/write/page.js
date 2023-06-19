import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Write() {
  let userInfo = await getServerSession(authOptions);

  return (
    <>
      {userInfo ? (
        <div className="p-20">
          <h4>글작성</h4>
          <form action="/api/post/new" method="POST">
            <input name="title" placeholder="글제목 입력" />
            <input name="content" placeholder="글내용 입력" />

            <button type="submit">DB에 글 저장 버튼</button>
          </form>

          <form action="/api/list" method="GET">
            <button type="submit">모든 데이터 가져오기 버튼</button>
          </form>

          <form action="/api/date" method="GET">
            <button type="submit">현재 날짜, 시간 가져오기 버튼</button>
          </form>
        </div>
      ) : (
        <div>로그인이 필요합니다.</div>
      )}
    </>
  );
}
