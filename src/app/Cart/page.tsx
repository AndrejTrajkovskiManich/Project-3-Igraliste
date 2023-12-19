"use client";
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";
import "./cart.scss";
import productsData from "../../../public/products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart ,faPlus} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import MyContext, { useMyContext } from "@/app/MyContext";
import Link from "next/link";
export default function Page() {
  const { setFavorites, favorites } = useMyContext();
  const { setItems, cartItem } = useMyContext();
  const { products } = productsData;
  console.log(favorites)
  return (
    <div>
      <Header />
      <div className="container-favorites">
        <div className="container-icons">
          <div className="flex-favorties margin-right">
            <FontAwesomeIcon
              className="icon-favorites"
              icon={faShoppingCart}
            />
            <p>Кошничка ({cartItem.length})</p>
          </div>
          <div  className="flex-favorties">
          <Link href={"/Favorites"} > <FontAwesomeIcon className="icon-favorites" icon={faHeart} /></Link>
            <p>Омилени ({favorites.length})</p>
          </div>
        </div>
        <div className="favorite-products">
        {cartItem.length > 0 ? (
    cartItem.map((cartProduct) => (
      
      <div key={cartProduct.id} className="favorite-product">
         <Link href={`Product/${cartProduct.id}`} className="link">
        <Image src={cartProduct.src} alt={cartProduct.title} width={100} height={100} className="favorite-img"/>
        <p>{cartProduct.title}</p>
        <p className="price-favorites">{cartProduct.price} ден.</p>
        </Link></div>
    ))
  ) : (
    <p>No product in cart!</p>
  )}
        </div>
        <div className="blocks-product-info">
          <div className="boxes-column">
            <div className="boxes margin-right margin-bottom">
              <div className="box">
                <Image
                  src="/verificationBadge.png"
                  alt="verificationBadge"
                  width={40}
                  height={40}
                />
                <h2>Контрола на квалитет</h2>
              </div>
              <FontAwesomeIcon className="box-icon" icon={faPlus} />
            </div>
            <div className="boxes  margin-right ">
              <div className="box">
                <Image
                  src="/verificationBadge.png"
                  alt="verificationBadge"
                  width={40}
                  height={40}
                />
                <h2>Контрола на квалитет</h2>
              </div>
              <FontAwesomeIcon className="box-icon" icon={faPlus} />
            </div>
          </div>
          <div className="boxes-column">
            <div className="boxes margin-bottom">
              <div className="box">
                <Image
                  src="/verificationBadge.png"
                  alt="verificationBadge"
                  width={40}
                  height={40}
                />
                <h2>Контрола на квалитет</h2>
              </div>
              <FontAwesomeIcon className="box-icon" icon={faPlus} />
            </div>
            <div className="boxes">
              <div className="box">
                <Image
                  src="/verificationBadge.png"
                  alt="verificationBadge"
                  width={40}
                  height={40}
                />
                <h2>Контрола на квалитет</h2>
              </div>
              <FontAwesomeIcon className="box-icon" icon={faPlus} />
            </div>
          </div>
        </div>
      </div>
      <Carousel cards={products.slice(0, 27)} />
      <Footer />
    </div>
  );
}
