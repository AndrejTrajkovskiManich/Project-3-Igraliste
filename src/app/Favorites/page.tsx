"use client";
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";
import "./favorites.scss";
import productsData from "../../../public/products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
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
          <Link href={"/Cart"} >
            <FontAwesomeIcon
              className="icon-favorites"
              icon={faShoppingCart}
            /></Link>
            <p>Кошничка ({cartItem.length})</p>
          </div>
          <div  className="flex-favorties">
            <FontAwesomeIcon className="icon-favorites" icon={faHeart} />
            <p>Омилени ({favorites.length})</p>
          </div>
        </div>
        <div className="favorite-products">
        {favorites.length > 0 ? (
    favorites.map((favoriteProduct) => (
      
      <div key={favoriteProduct.id} className="favorite-product">
         <Link href={`Product/${favoriteProduct.id}`}  className="link">
        <Image src={favoriteProduct.src} alt={favoriteProduct.title} width={100} height={100} className="favorite-img"/>
        <p>{favoriteProduct.title}</p>
        <p className="price-favorites">{favoriteProduct.price} ден.</p>
        </Link></div>
    ))
  ) : (
    <p>No favorite products yet!</p>
  )}
        </div>
      </div>
      <Carousel cards={products.slice(0, 27)} />
      <Footer />
    </div>
  );
}
