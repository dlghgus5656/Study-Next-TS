export default function handler(요청, 응답) {
  console.log(123);
  return 응답.status(200).json("처리완료"); // api를 호출한 후 응답을 받고 싶으면 사용하자
  // 서버기능 처리 성공시엔 status(200)
  // 서버기능 처리 실패시엔 status(500)
  // 서버기능 처리 실패시(유저 잘못으로) status(400)
}
