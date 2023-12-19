"use client";
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import "./kontakt.scss";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Header />
      <div className="paths">
       <Link href={"/"} className="path">Почетна</Link>
       <p>{'>'}</p>
       <Link href={"/Kontakt"} className="path">Контакт</Link>
       </div>
      <div className="kontaktmain">
        <div className="headText">
          <h1>Контакт</h1>
          <Image
            className="Spark"
            src="/sparks.png"
            alt="sparks"
            width={50}
            height={50}
          />
        </div>
        <div className="mainContant">
          <div className="textcontainer">
            <h1 className="h1-ZsDaNe">Игралиште Дебар Маало</h1>
            <p className="grayText">
              Откриј ги нашите останати модни парчиња и колекции кои ги немаме
              изложено на нашата страна!
            </p>
            <p>Костурски Херои бр.6/14 Дебар Маало, Скопје</p>
            <div>
              <p>Телефон за контакт:</p>
              <p className="grayText">+ 389 078 380 406</p>
            </div>
            <div>
              <p>Работно Време: </p>
              <p className="grayText">Понеделник - Петок 12:00 - 19:00.</p>
              <p className="grayText">Сабота 12:00 - 17:00</p>
            </div>
            <a href="" className="buttonkontakt">
              Кон продавницата
            </a>
          </div>

          <div className="kontaktimgContainer">
            <Image
              className="kontaktimg"
              src="/kontakt.png"
              alt="zanas"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
