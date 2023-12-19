"use client";
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import "./za-nas.scss";
import Link from "next/link";
type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <Header />
      <div className="paths">
       <Link href={"/"} className="path">Почетна</Link>
       <p>{'>'}</p>
       <Link href={"/ZaNas"} className="path">За Нас</Link>
       </div>
      <div className="ZaNas">
        <div className="headText">
          <h1>За Нас</h1>
          <Image
            className="Spark"
            src="/sparks.png"
            alt="sparks"
            width={50}
            height={50}
          />
        </div>
        <div className="buttonZaNas">
          <a>Нашата приказна</a>
          <span></span>
          <a>Нашата работа</a>
        </div>
        <div className="mainText">
          <div className="zanasimgContainer">
            <Image
              className="zanasimg"
              src="/zanas.png"
              alt="zanas"
              width={600}
              height={600}
              
            />
          </div>
          <div className="textZaNas">
            <h1>Кои сме ние?</h1>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem IpsumIt has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>

      <Footer />
    </div>
  );
}
