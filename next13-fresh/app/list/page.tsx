"use client";

import Image from "next/image";
import { useState } from "react";
import food0 from "/public/food0.png"; // public 폴더 안에 있으면 왼쪽 처럼 사용가능 아니면 @/public/food0.png 도 가능
import food1 from "/public/food1.png";
import food2 from "/public/food2.png";

export default function List() {
  let 상품 = [
    ["Tomatoes", food0],
    ["Pasta", food1],
    ["Cocount", food2],
  ];
  상품[2][0] = "Apple"; // Cocount에서 Apple로 변경

  let [수량, set수량] = useState([0, 1, 2]);

  return (
    <div>
      <h1>page안에 제목</h1>
      <h4 className="title">상품목록</h4>
      {상품.map((list, i) => {
        return (
          <div className="food" key={i}>
            {/* // Image를 사용하려면 이미지를 위에처럼 import 해줘서 사용해야 한다. */}
            <Image src={list[1]} alt="foodname" className="food-img" />
            {/* // 아래 방법은 이미지 파일명이 끝에 0부터 순서대로 1씩 증가하는걸 이용해 불러온다. */}
            <img src={`/food${i}.png`} alt="foodname" className="food-img" />

            {/* <img src="/food0.png" alt="food0" className="food-img" /> */}
            {/* <Image
              src="https://png.pngtree.com/element_our/20190522/ourmid/pngtree-illustration-hand-drawn-red-apple-fruit-material-ai-vector-fruit-element-image_1076281.jpg"
              width={500}
              height={500}
              alt="외부이미지"
              className="food-img"
            /> */}
            <h4>
              {/* children: React.ReactNode 일 경우에는 아래 처럼 하나의 괄호로 해줘야 한다. */}
              {list[0] + " $" + (40 + i * 10)}
            </h4>
            <span> 수량 {수량[i]} </span>
            <button
              onClick={() => {
                let 수량증가 = [...수량];
                수량증가[i] = 수량증가[i] + 1;
                set수량(수량증가);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                let 수량감소 = [...수량];
                수량감소[i] = 수량감소[i] - 1;
                set수량(수량감소);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
