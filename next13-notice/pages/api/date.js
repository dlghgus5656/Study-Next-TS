export default function getDate(요청, 응답) {
  let date = new Date();

  응답.status(200).json(date); // api를 호출한 후 응답을 받고 싶으면 사용하자
}
