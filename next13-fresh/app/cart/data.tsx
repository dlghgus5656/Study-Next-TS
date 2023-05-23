let age = 20;
let name = "Kim";

function Hello() {
  return (
    <div>
      <h1 className="title-sub">안녕하세요 Hello컴포넌트 입니다.</h1>
    </div>
  );
}

// export default age; // export defaut 문법은 파일에서 단 하나만 export가 가능하단 단점이 있다.
// export {} 문법을 사용하면 여러개를 export할 수 있다.
export { age, name, Hello };
