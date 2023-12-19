"use client";
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import "./gift-card.scss";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [color, setColor] = useState<number|null>(null);
function changeColor(value:number|null){
setColor(color===value?null:value)
}
  

  return (
    <div>
      <Header />
      <div className="giftcardContainer" onClick={ () => changeColor(null)}>
      
        <h1>Gift картички за подарок</h1>
        <div className="giftCardImgComtainer">
          <div className="gift-card-container">
          <Image
            className="giftCardImg"
            src="/giftcardsimg3.png"
            alt="giftCardImg"
            width={200}
            height={600}
          />{" "}
          <Image
            className="giftCardImg"
            src="/giftcardsimg2.png"
            alt="giftCardImg"
            width={200}
            height={600}
          />{" "}
          <Image
            className="giftCardImg"
            src="/giftcardsimg1.png"
            alt="giftCardImg"
            width={200}
            height={600}
          />
        </div></div>
        <div className="giftCardOptions" >
          <h2>Одбери цена на подарок картичка:</h2>
          <div className="giftCardPriceContainer">
            <button
              onClick={(e) => {e.stopPropagation()
                 changeColor(1)}}
              style={{ backgroundColor:color === 1 ? "rgb(206, 204, 204)" : " rgb(255, 246, 246)"  }}
              className="giftCard"
            >
              500 ден.
            </button>
            <button
              onClick={(e) => {e.stopPropagation()
                changeColor(2)}}
              style={{ backgroundColor:color === 2 ? "rgb(206, 204, 204)" : " rgb(255, 246, 246)" }}
              className="giftCard"
            >
              1000 ден.
            </button>
            <button
              onClick={(e) => {e.stopPropagation()
                changeColor(3)}}
              style={{ backgroundColor:color === 3 ? "rgb(206, 204, 204)" : " rgb(255, 246, 246)"  }}
              className="giftCard"
            >
              2000 ден.
            </button>
            <button
              onClick={(e) => {e.stopPropagation()
                changeColor(4)}}
              style={{ backgroundColor:color === 4 ? "rgb(206, 204, 204)" : " rgb(255, 246, 246)"  }}
              className="giftCard"
            >
              2500 ден.
            </button>
            <button
              onClick={(e) => {e.stopPropagation()
                changeColor(5)}}
              style={{ backgroundColor:color === 5 ? "rgb(206, 204, 204)" : " rgb(255, 246, 246)"  }}
              className="giftCard"
            >
              4000 ден.
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
