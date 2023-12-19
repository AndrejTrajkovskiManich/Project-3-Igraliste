import React, { useState, useEffect } from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Product from "./types";
import { ProductCard } from "../Card/Card";
import "./carousel.scss";

interface CarouselProps {
  cards: Product[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  const updateVisibleCards = () => {
    if (window.innerWidth < 1400 && window.innerWidth >= 1060) {
      setVisibleCards(3);
    } else if (window.innerWidth < 1060 && window.innerWidth >= 730) {
      setVisibleCards(2);
    } else if (window.innerWidth < 730) {
      setVisibleCards(1);
    } else {
      setVisibleCards(4);
    }
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards >= cards.length ? 0 : prevIndex + visibleCards
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - visibleCards : prevIndex - visibleCards
    );
  };

  const displayCards = cards.slice(currentIndex, currentIndex + visibleCards);

  return (
    <div className="carosel-container">
        <h1>Trendy парчиња во моментов</h1>
      <div className="carousel">
        <div className="cards-container">
          <FontAwesomeIcon
            className="arrow-prev arrow"
            icon={faAngleLeft}
            onClick={goToPrev}
          ></FontAwesomeIcon>
          {displayCards.map((card: any, index: any) => (
            <div key={index} className="card cards">
              <ProductCard
                id={card.id}
                src={card.src}
                price={card.price}
                title={card.title}
                key={index}
              />
            </div>
          ))}
          <FontAwesomeIcon
            className="arrow-next arrow"
            icon={faAngleRight}
            onClick={goToNext}
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
