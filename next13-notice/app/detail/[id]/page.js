// import React from "react";

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import LikeBtn from "./likeBtn";

export default async function Detail(props) {
  const db = (await connectDB).db("nextjsnotice");

  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  console.log(result._id, "resultpost");

  return (
    <div>
      <div>
        <div className="flex flex-row gap-5 ">
          <h2>{result.title}</h2>
          <span className="mt-6">
            {result.author ? `(작성자: ${result.author})` : null}
          </span>
        </div>
        <p>{result.content}</p>
      </div>
      <div className="flex flex-col gap-2">
        <Comment result={result} />
        <LikeBtn postid={result._id} />
      </div>
    </div>
  );
}
