// const client = await MongoClient.connect(
//   "mongodb+srv://dlghgus5656:1nm1TO3KDC31oVBx@nextjs13notice.ptil2ou.mongodb.net/?retryWrites=true&w=majority",
//   { useNewUrlParser: true }
// );

// export { client };

// 아래 세팅 코드는 굳이 외울 필요는 없다. / 그냥 mongodb 만든 사람들이 Nextjs에서는 이렇게 사용하라고 해서 사용하는것
import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://dlghgus5656:1nm1TO3KDC31oVBx@nextjs13notice.ptil2ou.mongodb.net/nextjsnotice?retryWrites=true&w=majority";
const options = { useNewUrlParser: true };

let connectDB;

// Nextjs는 개발시에만 새로 저장시 거의 모든 파일을 다시 읽기 때문에 아래와 같이 조건문을 사용한다.
// 개발중이라면 아래 global 함수를 사용해서 새로 저장해도 다시 읽지 말고 재활용 해달라라는 코드이다.
if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect(); // 변수에 저장해놓고 사용하면 매번 실행안되고 좋음
}
export { connectDB };
