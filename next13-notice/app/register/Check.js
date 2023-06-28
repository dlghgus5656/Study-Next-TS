"use client";

export default function Check({}) {
  const form = document.querySelector("form");
  const values = () => {
    Object.fromEntries(
      form.querySelectorAll("input").map((input) => [input.name, input.value])
    );
  }; // form에 입력값이 없을 때도 바로 실행 되서 에러가 발생하는중.

  return (
    <div>
      <form method="POST" action="/api/auth/signup">
        <input name="name" type="text" placeholder="이름" />
        <input name="email" type="text" placeholder="이메일" />
        <input name="password" type="password" placeholder="비번" />
        <button
          type="submit"
          onClick={() => {
            fetch("/api/auth/signup", {
              method: "POST",
              body: JSON.stringify(values),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data, "data");
                // data는 서버에서 응답받은 JSON 데이터입니다.
              })
              .catch((error) => {
                console.log(error);
                // error는 서버에서 응답받은 에러입니다.
              });
          }}
        >
          id/pw 가입요청
        </button>
      </form>
    </div>
  );
}
