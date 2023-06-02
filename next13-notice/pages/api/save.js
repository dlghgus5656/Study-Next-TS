import { connectDB } from "@/util/database";

export default async function contentSave() {
  const db = (await connectDB).db("nextjsnotice");

  let result = await db.collection("post").find();
}
