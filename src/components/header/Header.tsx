import React from "react";
import Logo from "../../assets/icons/logo_welbex.svg";
import Telegram from "../../assets/icons/telegram.svg";
import Viber from "../../assets/icons/viber.svg";
import WatsApp from "../../assets/icons/whatsapp.svg";

import "./header.scss";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 360 });

  const socialIcons = (
    <div className="header__contact-us-socials">
      <a href="#">
        <img src={Telegram} alt="telegram" width={20} height={20} />
      </a>
      <a href="#">
        <img src={Viber} alt="viber" width={20} height={20} />
      </a>
      <a href="#">
        <img src={WatsApp} alt="watsApp" width={20} height={20} />
      </a>
    </div>
  );

  return (
    <header className="header">
      <div className="app-wrapper">
        {!isMobile && (
          <div className="header__logo">
            <img src={Logo} alt="logo" />
            <p className="header__logo-text">
              крупный интегратор CRM в Росcии и ещё 8 странах
            </p>
          </div>
        )}
        <div className="header__navbar">
          <nav className="header__navbar-list">
            <ul>
              <li>
                <a href={"/"}>Услуги</a>
              </li>
              <li>
                <a href={"/"}>Виджеты</a>
              </li>
              <li>
                <a href={"/"}>Интеграции</a>
              </li>
              <li>
                <a href={"/"}>Кейсы</a>
              </li>
              {!isMobile && (
                <li>
                  <a href={"/"}>Сертификаты</a>
                </li>
              )}
            </ul>
          </nav>
        </div>
        {!isMobile && (
          <div className="header__contact-us">
            <div className="header__contact-us-phone">+7 555 555-55-55</div>
            {socialIcons}
          </div>
        )}
      </div>

    </header>
  );
}
