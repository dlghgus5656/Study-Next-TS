export default function handler(요청, 응답) {
  const result = JSON.parse(요청.body);
  console.log(result.parentid, "result 요청.body"); // 요청.body에 키값이 string값으로 들어와서 요청.body.content같은거 못썼는데 해결함

  //   if(요청.method === "POST") {
  //       try{

  //       }
  //   }

  return;
}
