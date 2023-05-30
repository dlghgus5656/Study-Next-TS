// import React from "react";

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const db = (await connectDB).db("nextjsnotice");

  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  console.log(result, "#@#@");
  console.log(props.params.id, "props");

  return <div>{result.title}</div>;
}
