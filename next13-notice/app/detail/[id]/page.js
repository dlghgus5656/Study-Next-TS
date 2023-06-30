// import React from "react";

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";

export default async function Detail(props) {
  const db = (await connectDB).db("nextjsnotice");

  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  console.log(result, "props");

  return (
    <div>
      <div>
        <div className="flex flex-row gap-5 ">
          <h2>{result.title}</h2>
          <span className="mt-6">
            ``
            {result.author ? `(작성자: ${result.author})` : null}
          </span>
        </div>
        <p>{result.content}</p>
      </div>
      <Comment result={result} />
    </div>
  );
}
