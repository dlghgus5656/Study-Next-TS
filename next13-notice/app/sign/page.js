export default function SignUp() {
  return (
    <div className="p-20">
      <h4>회원가입</h4>
      <form action="/api/signup" method="POST">
        <input name="id" placeholder="아이디 입력" />
        <input name="password" placeholder="비밀번호 입력" />

        <button type="submit">회원가입 버튼</button>
      </form>
    </div>
  );
}
2;
