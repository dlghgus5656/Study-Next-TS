import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";

export default async function handler(요청, 응답) {
  console.log(요청.body, "요청바디!");
  const db = (await connectDB).db("nextjsnotice");
  const checkEmail = await db
    .collection("user_cred")
    .findOne({ email: 요청.body.email });

  if (요청.method === "POST") {
    console.log(요청.body, "body");
    if (checkEmail) {
      console.log("중복된 이메일입니다.");
      return 응답.status(300).json("중복된 이메일입니다.");
    } else if (요청.body.name === "") {
      console.log("이름을 입력해주세요.");
      응답.redirect(302, "/register");
      return 응답.status(300).json("이름을 입력해주세요.");
    } else if (요청.body.email === "") {
      console.log("이메일을 입력해주세요.");
      return 응답.status(300).json("이메일을 입력해주세요.");
    } else if (요청.body.password === "") {
      console.log("비밀번호를 입력해주세요.");
      return 응답.status(300).json("비밀번호를 입력해주세요.");
    }

    try {
      const hash = await bcrypt.hash(요청.body.password, 10);
      요청.body.password = hash;
      console.log(hash, "hash");

      let db = (await connectDB).db("nextjsnotice");
      await db.collection("user_cred").insertOne(요청.body);
      return 응답.redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
  } else {
    return 응답.status(300).json("회원가입 요청 실패");
  }
}
