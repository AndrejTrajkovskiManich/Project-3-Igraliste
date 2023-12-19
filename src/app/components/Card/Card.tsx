"use client";
import React from "react";
import productsData from "../../../../public/products.json";
import Image from "next/image";
import "./card.scss";
import Link from "next/link";
type Product = {
  src: string;
  price: string;
  title: string;
  id: number;
};

export const ProductCard: React.FC<Product> = ({ src, price, title, id }) => {
  return (
    <Link href={`Product/${id}`} className="link">
      <Image src={src} alt="Product" width={320} height={500} />
      <div className="info">
        <p className="info-p">{title}</p>
        <p className="info-p">{price} ден</p>
      </div>
    </Link>
  );
};

const ProductsPage = () => {
  const { products } = productsData;

  if (!products || !products.length) {
    return <div>No products found</div>;
  }

  const { src, price, title } = products[0];

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          id={product.id}
          src={product.src}
          price={product.price}
          title={product.title}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
