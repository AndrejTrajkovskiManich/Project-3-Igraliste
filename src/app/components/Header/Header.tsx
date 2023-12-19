import React, { useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {
  faShoppingCart,
  faHeart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const textElement = document.querySelector(".text") as HTMLElement | null;
    if (textElement) {
      const position = "right";
      const style = document.createElement("style");
      style.innerHTML = `@keyframes my-animation {
        0% { ${position}:-${textElement.offsetWidth + 10}px; }
        100% { ${position}:100%; }
      }`;
      document.head.append(style);
    } else {
      console.error("Element with class 'text' not found");
    }
  }, []);
  return (
    <div className="container-header">
      <div className="header-mobile">
        <div>
        <FontAwesomeIcon className="menu-bars" icon={faBars} onClick={handleMenuToggle}/>
        </div>
        <div className="logo">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            className="logo-img"
            alt="logo"
            width={250}
            height={50}
          /></Link>
        </div>
        <div className="SecondLayer">
          <div className={`HeaderOptions menu ${isOpen ? 'active' : ''}`}>
            <p className="options">Ново</p>
            <div className="dropdown">
              <span className="options">Vintage облека</span>
              <span className="menu-icon">{">"}</span>
              <div className="dropdownContent">
                <ul>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    />
                    <Link href={"/Filter-page"} className="links">
                    Види ги сите</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Блузи</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Панталони</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Здолништа / шорцеви</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Фустани</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    палта и јакни</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Долна облека</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dropdown">
              <span className="options">Брендови</span>
              <span className="menu-icon">{">"}</span>
              <div className="dropdownContent">
                <ul>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Види ги сите</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Pine partywear</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Pine Partywear</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Factory Girl</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Main Days</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Нежно</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Ред</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Наш</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Зш да не</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Fraeil</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Urma</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Candle nest</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Beyond green</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Gatta</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dropdown">
              <span className="options">Аксесоари </span>
              <span className="menu-icon">{">"}</span>
              <div className="dropdownContent">
                <ul className="options">
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Ташни</Link>
                  </li>
                  <li>
                    <Image
                      className="sparks"
                      src="/sparks.png"
                      alt="sparks"
                      width={20}
                      height={20}
                    /><Link href={"/Filter-page"} className="links">
                    Накит</Link>
                  </li>
                </ul>
              </div>
            </div>
            <p className="options">Lifestyle</p>
            <Link href={"/Gift-Cards"} className="options">Подари картичка*</Link>
            <Link href={"/Filter-page"} className="options">Попуст</Link>
            
          </div>
          <div className="RightOptions">
            <div className="search iconWM">
              <input type="text" name="" id="searchField"></input>
              <FontAwesomeIcon
                className=" searchIcon"
                icon={faMagnifyingGlass}
              />
            </div>
            <Link href={"/Cart"} >
            <FontAwesomeIcon
              className="iconsHeader iconWM"
              icon={faShoppingCart}
            /></Link>
            <Link href={"/Favorites"} ><FontAwesomeIcon className="iconsHeader iconWM" icon={faHeart} /></Link>
            <FontAwesomeIcon className="iconsHeader" icon={faUser} />
          </div>
        </div>
      </div>
      <div className="ThirdLayer">
        <div className="group">
          <p className="text">
            Valentines Winter Collection 2023{" "}
            <Image
              className="vector"
              src="/Vector.png"
              alt="sparks"
              width={20}
              height={20}
            />{" "}
            Нова колекција{" "}
            <Image
              className="vector"
              src="/Vector.png"
              alt="sparks"
              width={20}
              height={20}
            />{" "}
            Valentines Winter Collection 2023{" "}
            <Image
              className="vector"
              src="/Vector.png"
              alt="sparks"
              width={20}
              height={20}
            />{" "}
            Нова колекција{" "}
            <Image
              className="vector"
              src="/Vector.png"
              alt="sparks"
              width={20}
              height={20}
            />{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
