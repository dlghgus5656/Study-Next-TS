import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    if (요청.body.id === "") {
      return 응답.status(500).json("아이디를 입력해 주세요.");
    } else if (요청.body.password === "") {
      return 응답.status(500).json("비밀번호를 입력해 주세요.");
    }
    try {
      const db = (await connectDB).db("nextjsnotice");
      const checkId = await db
        .collection("userInfo")
        .find({ id: 요청.body.id })
        .toArray();
      // 중복 id 검사 코드
      if (checkId[0] === undefined) {
        let result = await db.collection("userInfo").insertOne(요청.body);
        console.log("id 생성 완료");
        return 응답.redirect(302, "/list");
      } else {
        return console.log("중복된 id가 존재합니다.");
      }
    } catch (error) {
      console.log(error);
    }
  }
}
