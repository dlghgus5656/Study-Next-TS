import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = (await connectDB).db("nextjsnotice");

  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  //   await db
  //     .collection("post")
  //     .updateOne({ _id: new ObjectId(props.params.id) }, { $set: {} });

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/update" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input
          className="hidden"
          name="_id"
          defaultValue={result._id.toString()}
        />

        <button type="submit">DB에 글 수정 버튼</button>
      </form>
    </div>
  );
}
