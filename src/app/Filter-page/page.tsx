"use client";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import "./filter.scss";
import data from "../../../public/products.json";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
interface Product {
  src: string;
  title: string;
  sizes: string;
  price: any;
  id: number;
  oznaka1: string;
  oznaka2: string;
  oznaka3: string;
  oznaka4: string;
  brand: string;
  color: string;
  types: string;
}
interface Filters {
  colors: string[];
  sizes: string[];
  prices: { minPrice: number; maxPrice: number }[];
  brands: string[];
  types: string[];
  search: string;
}

const dummyProducts: Product[] = data.products;
const ProductFilter: React.FC<{ products: Product[] }> = () => {
  const [filters, setFilters] = useState<Filters>({
    colors: [],
    sizes: [],
    prices: [],
    brands: [],
    types: [],
    search: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(dummyProducts);

  const applyFilters = () => {
    let filtered = [...dummyProducts];

    if (filters.colors.length > 0) {
      filtered = filtered.filter((product) =>
        filters.colors.includes(product.color)
      );
    }

    if (filters.sizes.length > 0) {
      filtered = filtered.filter((product) =>
        filters.sizes.includes(product.sizes)
      );
    }

    if (filters.brands.length > 0) {
      filtered = filtered.filter((product) =>
        filters.brands.includes(product.brand)
      );
    }

    if (filters.types.length > 0) {
      filtered = filtered.filter((product) =>
        filters.types.includes(product.types)
      );
    }
    if (filters.prices.length > 0) {
      filtered = filtered.filter((product) =>
        filters.prices.some(
          (price) =>
            parseFloat(product.price) >= price.minPrice &&
            parseFloat(product.price) <= price.maxPrice
        )
      );
    }
    if (filters.search !== "") {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredProducts(filtered);
  };
  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, currentPage]);

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const productsPerPage = Array.from({ length: totalPages }, (_, index) =>
    filteredProducts.slice(index * itemsPerPage, (index + 1) * itemsPerPage)
  );
  console.log(productsPerPage);
  const priceRanges = [
    { label: "500 - 1000", min: 500, max: 1000 },
    { label: "1500 - 2000", min: 1500, max: 2000 },
    { label: "2000 - 2500", min: 2000, max: 2500 },
    { label: "Над 2500 ден.", min: 2500, max: 999999999 },
  ];
  const typesList = [
    "Долна облека",
    "Палта и јакни",
    "Фустани",
    "Здолништа / шорцеви",
    "Панталони",
    "Блузи",
  ];
  const other = ["Накит", "Ташни"];
  const colorMap = {
    red: { backgroundColor: "red" },
    green: { backgroundColor: "green" },
    black: { backgroundColor: "black" },
    white: { backgroundColor: "white" },
    blue: { backgroundColor: "blue" },
    gray: { backgroundColor: "gray" },
    pink: { backgroundColor: "pink" },
    purple: { backgroundColor: "purple" },
    yellow: { backgroundColor: "yellow" },
    orange: { backgroundColor: "orange" },
  };

  const handlePriceRangeChange = (range: {
    label: string;
    min: number;
    max: number;
  }) => {
    const isRangeSelected = filters.prices.some(
      (price) => price.minPrice === range.min && price.maxPrice === range.max
    );

    if (isRangeSelected) {
      const updatedPrices = filters.prices.filter(
        (price) =>
          !(price.minPrice === range.min && price.maxPrice === range.max)
      );
      setFilters({ ...filters, prices: updatedPrices });
    } else {
      const updatedPrices = [
        ...filters.prices,
        { minPrice: range.min, maxPrice: range.max },
      ];
      setFilters({ ...filters, prices: updatedPrices });
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <a
          key={i}
          onClick={() => setCurrentPage(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </a>
      );
    }
    return pageNumbers;
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = dummyProducts.slice(startIndex, endIndex);
  const handleCheckboxChange = (filterType: keyof Filters, value: string) => {
    const updatedFilters: any = { ...filters };
    if (updatedFilters[filterType].includes(value)) {
      updatedFilters[filterType] = updatedFilters[filterType].filter(
        (item: any) => item !== value
      );
    } else {
      updatedFilters[filterType] = [...updatedFilters[filterType], value];
    }
    setFilters(updatedFilters);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setFilters({ ...filters, search: searchValue });
  };

  return (
    <div>
      <Header />
      <div className="paths">
        <Link href={"/"} className="path">
          Почетна
        </Link>
        <p>{">"}</p>
        <Link href={"/Filter-page"} className="path">
          Сите
        </Link>
      </div>
      <div className="container">
        <div onClick={handleMenuToggle} className="searchIcon-displayed-none">
        <FontAwesomeIcon className="menu-bars-filter" icon={faBars}/>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
        /></div>
        <div className={`menu filters ${isOpen ? "active" : ""}`}>
          <div className="search iconWM">
            <input
              id="searchField"
              type="text"
              placeholder="Пребарувај"
              value={filters.search}
              onChange={handleSearchChange}
            />
            <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
          </div>
          <div className="filter-section">
            <h4>Категорија</h4>
            {typesList.map((type) => {
              const num = dummyProducts.filter((P) => P.types === type);
              return (
                <label key={type}>
                  <input
                    type="checkbox"
                    value={type}
                    checked={filters.types.includes(type)}
                    onChange={() => handleCheckboxChange("types", type)}
                  />
                  {type}
                  <span> ({num.length})</span>
                </label>
              );
            })}
            <h4>Брендови</h4>
            {[
              "Pinc Partywear",
              "Factory Girl",
              "Main Days",
              "Нежно",
              "Ред",
              "Наш",
              "Fraeil",
              "Urma",
              "Candle Nest",
              "Beyond Green",
              "Gatta",
            ].map((brand) => (
              <label key={brand}>
                <input
                  type="checkbox"
                  value={brand}
                  checked={filters.brands.includes(brand)}
                  onChange={() => handleCheckboxChange("brands", brand)}
                />{" "}
                {brand}
              </label>
            ))}

            <h4>Akcecoaри</h4>
            {other.map((type) => {
              return (
                <label key={type}>
                  <input
                    type="checkbox"
                    value={type}
                    checked={filters.types.includes(type)}
                    onChange={() => handleCheckboxChange("types", type)}
                  />
                  {type}
                </label>
              );
            })}
            <h4>Величина</h4>
            {["M", "L", "XL", "S", "XS"].map((size) => (
              <label key={size}>
                <input
                  type="checkbox"
                  value={size}
                  checked={filters.sizes.includes(size)}
                  onChange={() => handleCheckboxChange("sizes", size)}
                />{" "}
                {size}
              </label>
            ))}
            <h4>Боја</h4>
            <div className="color-container">
              {[
                "red",
                "orange",
                "yellow",
                "green",
                "blue",
                "pink",
                "purple",
                "gray",
                "white",
                "black",
              ].map((color) => (
                <div
                  key={color}
                  style={{ backgroundColor: color }}
                  className="color-div"
                >
                  <input
                    type="checkbox"
                    value={color}
                    checked={filters.colors.includes(color)}
                    onChange={() => handleCheckboxChange("colors", color)}
                    className="input-color"
                  />
                </div>
              ))}
            </div>
            <h4>Цена</h4>
            {priceRanges.map((range) => (
              <label key={range.label} className="cena">
                <input
                  type="checkbox"
                  value={range.label}
                  checked={filters.prices.some(
                    (price) =>
                      price.minPrice === range.min &&
                      price.maxPrice === range.max
                  )}
                  onChange={() => handlePriceRangeChange(range)}
                />{" "}
                {range.label}
              </label>
            ))}
            <button className="buttons-for-filter " onClick={handleMenuToggle}>Филтрирај</button>
            <p className=" last-button" onClick={() => {
              setFilters({
                colors: [],
                sizes: [],
                prices: [],
                brands: [],
                types: [],
                search: "",
              })
              setIsOpen(false)
            }}>откажи</p>
          </div>
        </div>
        <div className="products-section">
          <div className="product-container">
            {productsPerPage[currentPage - 1]?.map((productSet: any, idx) => {
              console.log(productSet);
              return (
                <div className="product-row" key={idx}>
                  <Link
                    href={`Product/${productSet.id}`}
                    key={productSet.id}
                    className="product-item"
                  >
                    <div className="product-details">
                      <Image
                        src={productSet.src}
                        alt={productSet.title}
                        width={420}
                        height={600}
                        className="Img-product"
                      />
                      <h3>{productSet.title}</h3>
                      <p>{productSet.price} ден</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="pagination">
            <a onClick={handlePreviousPage}>&lt; Prev</a>
            {renderPageNumbers()}
            <a onClick={handleNextPage}>Next &gt;</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductFilter;
