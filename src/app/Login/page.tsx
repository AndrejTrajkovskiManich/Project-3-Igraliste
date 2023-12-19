"use client";
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import "./login.scss";
export default function page() {
  return (
    <div>
      <Header />
      <div className="paths">
        <Link href={"/"} className="path">
          Почетна
        </Link>
        <p>{">"}</p>
        <Link href={"/Login"} className="path">
          Најави Се
        </Link>
      </div>
      <div className="Login-container">
        <div className="headText">
          <Image
            className="Spark"
            src="/sparks.png"
            alt="sparks"
            width={50}
            height={50}
          />
          <h1>Најави се!</h1>
        </div>
        
      </div>

      <Footer />
    </div>
  );
}
