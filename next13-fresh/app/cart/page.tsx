// "use client";
// import age from "./data"; // import 할때 경로는 웬만하면 ./ 로 시작해주는것이 좋다.
// "./../폴더명data.js" 상위폴더이동
// "./폴더명data.js" 하위폴더이동
// export default 를 가져온게 아니라 export{} 을 가져오는 것이라면 아래처럼 해주어야 한다. -> {작명}
import { age, name, Hello } from "./data";
// import { useState } from "react";

interface BannerProps {
  card: string;
}
export default function Cart() {
  let 장바구니 = ["Tomatoes", "Pasta"];

  return (
    <div>
      <h4 className="title">Cart</h4>
      <Hello />
      <CartItem item={장바구니[0]} />
      <CartItem item={장바구니[1]} />
      <CartItem />
      <Banner card="롯데카드" />
      <Btn color="red" />
      <Btn color="blue" />
    </div>
  );
}

// Component
function Banner(props: BannerProps) {
  return <h2>{props.card} 결제 행사중!!!</h2>;
}

// Component
function CartItem(props: any) {
  return (
    <div className="cart-item">
      <p>상품명 {props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

function Btn(props: any) {
  return <button style={{ background: props.color }}>버튼입니다.</button>;
}
