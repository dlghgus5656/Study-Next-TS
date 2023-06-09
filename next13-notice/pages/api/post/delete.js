import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method == "DELETE") {
    console.log(요청, "요청"); // ListItem에서 요청.body 값이 안넘어옴;;
    // try {
    //   const db = (await connectDB).db("nextjsnotice");
    //   await db
    //     .collection("post")
    //     .deleteOne({ _id: new ObjectId(요청.body._id) });
    // return 응답.redirect(302, "/list");
    // } catch (error) {
    //   console.log(error);
    // }
    응답.status(200).json("삭제완료");
  }
}
