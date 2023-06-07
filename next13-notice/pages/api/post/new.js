"use client";
import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  const fs = require("fs");

  if (요청.method == "POST") {
    if (요청.body.title === "") {
      return 응답.status(500).json("제목을 입력해 주세요.");
    } else if (요청.body.content === "") {
      return 응답.status(500).json("내용을 입력해 주세요.");
    }
    try {
      const db = (await connectDB).db("nextjsnotice");
      let result = await db.collection("post").insertOne(요청.body);
      return 응답.redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
  }
}
