"use client";
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";
import productsData from "../../../public/products.json";
import Image from "next/image";
import "./ZsDaNe.scss";
import Link from "next/link";
type Props = {};

export default function page({}: Props) {
  const { products } = productsData;
  return (
    <div>
      <Header />
      <div className="paths">
       <Link href={"/"} className="path">Почетна</Link>
       <p>{'>'}</p>
       <Link href={"/"} className="path">Локални брендови</Link>
       <p>{'>'}</p>
       <Link href={"/ZsDaNe"} className="path">Зш да не</Link>
       </div>
      <div className="ContainerZSDANE">
        <div className="headText-mobile">
          <Image
            className="Spark"
            src="/sparks.png"
            alt="sparks"
            width={50}
            height={50}
          />
          <h1>Зш да не</h1>
        </div>
        <Image
          src="/ZSDANE.png"
          alt="image"
          className="zsdaneimg"
          width={500}
          height={500}
        />
        <div className="TextContainer">
          <div className="headText">
            <Image
              className="Spark"
              src="/sparks.png"
              alt="sparks"
              width={50}
              height={50}
            />
            <h1>Зш да не</h1>
          </div>
          <p>Концептот на @zshdane_ се базира на неколку прашања:</p>
          <ul>
            <li>
              Дали постои простор за етикетирања и табу во овој безобразно
              неетички свет?
            </li>
            <li>Зошто фолирањето култура е поприфатено од искрениот отпор?</li>
            <li>
              Дали треба да се срамиме од сопственото само за друг да биде
              мирен?
            </li>
            <li>Дали ќе ни текне?</li>
          </ul>
          <p>Зачувај го слободниот дух и биди тоа што си с е к о г а ш .</p>
          <p className="lastp">
            Погледнете ги производите на Зш да не кои ги нудиме во Игралиште.
            Имаме доста голем избор на Pussy привезоци кои се кул и ултра
            феминистички, а.к.а. grl pwr.
          </p>
        </div>
      </div>
      <Carousel cards={products.slice(0, 27)} />
      <Footer />
    </div>
  );
}
