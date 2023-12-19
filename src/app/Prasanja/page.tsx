"use client";
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import "./prasanja.scss";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Header />
      <div className="paths">
       <Link href={"/"} className="path">Почетна</Link>
       <p>{'>'}</p>
       <Link href={"/Prasanja"} className="path">Често Поставувани Прашања</Link>
       </div>
      <div className="containerPrasanja">
        <div className="headText">
          <h1 className="display-mobile">FAQ</h1>
          <h1 className="displayed">Често поставувани прашања</h1>
          <Image
            className="Spark"
            src="/sparks.png"
            alt="sparks"
            width={50}
            height={50}
          />
        </div>
        <div className="prasanja">
          <div className="prasanje">
            <p className="mainQuestion">
              1. Ова е примерок за прашања кои би биле на страната?{" "}
            </p>
            <p className="subText">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p><div className="border"></div>
          </div>
          <div className="prasanje">
            <p className="mainQuestion">
              2. Ова е примерок за прашања кои би биле на страната?{" "}
            </p>
            <p className="subText">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p><div className="border"></div>
          </div>
          <div className="prasanje">
            <p className="mainQuestion">
              3. Ова е примерок за прашања кои би биле на страната?{" "}
            </p>
            <p className="subText">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p><div className="border"></div>
          </div>
          <div className="prasanje">
            <p className="mainQuestion">
              4. Ова е примерок за прашања кои би биле на страната?{" "}
            </p>
            <p className="subText">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p><div className="border"></div>
          </div>
          <div className="prasanje">
            <p className="mainQuestion">
              5. Ова е примерок за прашања кои би биле на страната?{" "}
            </p>
            <p className="subText">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            
          </div>
          
        </div>
      </div>

      <Footer />
    </div>
  );
}
