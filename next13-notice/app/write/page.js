export default function Write() {
  return (
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
  );
}
