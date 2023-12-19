"use client";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Image from "next/image";
import "./home-page.scss";
import Carousel from "./components/Carousel/Carousel";
import productsData from "../../public/products.json";
import Link from "next/link";
export default function page() {
  const { products } = productsData;
  return (
    <div>
      <Header />
      <div className="firstSection">
        <div className="first-img">
          <Image
            className="mainImg1"
            src="/mainImg1.png"
            alt="sparks"
            width={500}
            height={500}
          />
          <Link href={"/Filter-page"}>
            <Image
              className="circle1"
              src="/circle1.png"
              alt="sparks"
              width={350}
              height={350}
            />
          </Link>
        </div>
      </div>
      <div className="carouselHome">
        

        <Carousel cards={products.slice(0, 27)} />
      </div>
      <div className="secondSection">
        <div className="first-img">
        <Link href={"/Filter-page"}>
            <Image
              className="circle2"
              src="/Circle2.png"
              alt="sparks"
              width={350}
              height={350}
            />
          </Link>
          <Image
            className="mainImg2"
            src="/mainImg2.png"
            alt="sparks"
            width={500}
            height={500}
          />
          <Link href={"/Filter-page"}>
            <Image
              className="circle2-displayedNone"
              src="/Circle2.png"
              alt="sparks"
              width={350}
              height={350}
            />
          </Link>
        </div>
      </div>
      <div className="thirdSection">
        <div className="second-mobile-img">
          <Image
            className="mainImg3"
            src="/mainImg3.png"
            alt="sparks"
            width={500}
            height={500}
          />
          <Link href={"/Filter-page"}>
            <Image
              className="circle3"
              src="/circle3.png"
              alt="sparks"
              width={350}
              height={350}
            />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
