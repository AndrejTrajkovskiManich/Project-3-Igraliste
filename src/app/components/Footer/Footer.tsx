import React from "react";
import "./footer.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="FooterContainer">
      <div className="FooterFirstLayer">
        <div className="FFLL">
          <h1>Следи ги нашите новости!</h1>
          <p>
            Биди дел од нашиот newsletter и дознавај прва за промоции, попусти и
            нови колекции.
          </p>
        </div>
        <div className="FFLR">
          <div className="email">
            <label htmlFor="email">E-mail адреса:</label>
            <input type="email" name="" id="" />{" "}
          </div>
          <a href="">Зачлени се!</a>
        </div>
      </div>
      <div className="FooterSecondLayer">
        <div className="FSLL">
          <div className="margin-right-footer">
          <Link href={"/ZaNas"} className="options">За нас</Link>
          <Link href={"/Kontakt"} className="options">Контакт</Link>
          <Link href={"/"} className="options">Локатор на продавницата</Link>
          </div>
          <div>
          <Link href={"/Prasanja"} className="options">Често поставувани прашања (FAQ)</Link>
          <Link href={"/"} className="options">Регистрирај се / логирај се</Link>
          </div>
        </div>
        <div className="FSLR">
          <p>Следи не на:</p>
          <div>
            <p>igralishte.sk</p>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div>
            <p>igralishte.sk</p>
            <FontAwesomeIcon icon={faTiktok} />
          </div>
        </div>
      </div>
      <div className="FooterThirdLayer">
        <p>Сите права задржани © 2023 igralishtesk.mk</p>
      </div>
    </div>
  );
}
