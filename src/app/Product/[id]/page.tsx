"use client";
import React from "react";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import Image from "next/image";
import data from "../../../../public/products.json";
import "./product.scss";
import { useParams } from "next/navigation";
import Carousel from "@/app/components/Carousel/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import MyContext, { useMyContext } from "@/app/MyContext";
import { useState } from "react";
export default function Page() {
  const { setFavorites, favorites } = useMyContext();
  const { setItems, cartItem } = useMyContext();
  const [isRed, setIsRed] = useState(false);
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setIsRed(prevState => !prevState);
  };
  const params = useParams();
  const products = data.products;
  console.log(products);
  const product: any =
    products.find((product) => product.id + "" === params.id) || null;
  console.log(product);
  if (!product) return <p>Error</p>;
 
  
    const increment = () => {
      setCount(prevCount => prevCount + 1);
    };
  
    const decrement = () => {
      if (count > 1) {
        setCount(prevCount => prevCount - 1);
      }
    };
  
  return (
    <div>
      <Header />
      <div className="paths">
       <Link href={"/"} className="path">Почетна</Link>
       <p>{'>'}</p>
       <Link href={"/Filter-page"} className="path">Vintage облека</Link>
       <p>{'>'}</p>
       <Link href={"/Product"} className="path">{product.types}</Link>
       
       </div>
      <div className="container-main">
        <div className="container">
          <div className="mobile-container-img">
            <h1 className="border-max-contant h1-displayed-none">
              {product.title}
            </h1>
            <Image
              src={product.src}
              alt="Product"
              width={500}
              height={700}
              className="img-product-section"
            />
            <div className="oznaki">
              <h3>Ознаки</h3>
              <div className="oznaki-buttons">
                <p className="oznaka">{product.oznaka1}</p>
                <p className="oznaka">{product.oznaka2}</p>
                <p className="oznaka">{product.oznaka3}</p>
                <p className="oznaka">{product.oznaka4}</p>
              </div>
            </div>
          </div>
          <div className="info-product">
            <h1 className="border-max-contant">{product.title}</h1>
            <div className="product-info-sections     border">
              <h2 className="padding">{product.price} ден</h2>
              <p className=" color">{product.description}</p>
              <div className="favorites-heart-count">
                <h3>Количина:</h3>
                <span className="count" onClick={decrement}>-</span> <p>{count}</p><span className="count" onClick={increment}>+</span>
                <button onClick={ () => {
                  const isItInCart = cartItem.find(f => f.id === product.id)
                  if (isItInCart) {
                    const newP = cartItem.filter(p => p.id !== product.id)
                    setItems(newP)
                    return
                  }
                  setItems([...cartItem, {...product, quantity: count}])
                }} >Додај во Кошничка</button>
                <FontAwesomeIcon style={{ color: isRed ? 'red' : 'gray' }} onClick={ () => {
                  handleClick()
                  const isItFav = favorites.find(f => f.id === product.id)
                  if (isItFav) {
                    const newP = favorites.filter(p => p.id !== product.id)
                    setFavorites(newP)
                    return
                  }
                  setFavorites([...favorites, product])
                }} className="box-icon" icon={faHeart} />
                </div>
            </div>
            <div className="product-info-sections border-max-contant">
              <div className="sizes-container padding">
                <h2>Величина: </h2>
                <p className="sizes ">{product.sizes}</p>
                <p>*{product.kolicina}*</p>
              </div>
              <p className="padding">{product.sovet}</p>
              <a href="">Види ги димензиите</a>
            </div>
            <div className="product-info-sections border ">
              <div className="flex padding">
                <h2>Боја:</h2>
                <div
                  className="block-of-color"
                  style={{ backgroundColor: `${product.color}` }}
                ></div>
                <p>{product.color}</p>
              </div>
              <div className="padding">
                <h2 className="padding">Материјал:</h2>
                <p className="padding">{product.matrijal}</p>
                <div className="flex">
                  <h2>Постава:</h2>
                  <p>{product.matrijal}</p>
                </div>
              </div>
              <div className="flex ">
                <h2>Состојба:</h2>
                <p className=" color">{product.sostojba}</p>
                <a href="">прочитај повеќе</a>
              </div>
            </div>
            <div className="product-info-sections">
              <h2 className="padding">Насоки за одржување:</h2>
              <p>{product.odrzuvanje}</p>
            </div>
          </div>
        <div className="oznaki-mobile">
          <h3>Ознаки</h3>
          <div className="oznaki-buttons">
            <p className="oznaka">{product.oznaka1}</p>
            <p className="oznaka">{product.oznaka2}</p>
            <p className="oznaka">{product.oznaka3}</p>
            <p className="oznaka">{product.oznaka4}</p>
          </div>
        </div>
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
