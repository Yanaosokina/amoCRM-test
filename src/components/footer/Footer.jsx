import React from "react";
import Telegram from "../../assets/icons/telegram.svg";
import Viber from "../../assets/icons/viber.svg";
import WatsApp from "../../assets/icons/whatsapp.svg";

import "./footer.scss";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 360 });
  const aboutUsItems = ["Партнёрская программа", "Вакансии"];
  const menuItems = [
    "Расчёт стоимости",
    "Услуги",
    "Виджеты",
    "Интеграции",
    "Наши клиенты",
    "Кейсы",
    'Благодарственные письма',
    "Сертификаты",
    "Блог на Youtube",
    "Вопрос / Ответ",
  ];
  let menuItemsMobile = [
    "Расчёт стоимости",
    "Услуги",
    "Виджеты",
    "Интеграции",
    "Наши клиенты",
    'Благодарность клиентов',
    "Кейсы",
    "Сертификаты",
    "Блог на Youtube",
    "Вопрос / Ответ",
  ];

  return (
    <div className="footer">
      <div className="app-wrapper">
        <div className="footer__about-us">
          <h4 className="footer__title">О компании</h4>
          <ul>
            {aboutUsItems.map((item, index) => (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__menu">
          <h4 className="footer__title">Меню</h4>
          <div className="menu-columns">

            {!isMobile  && menuItems.map((item, index) => (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            ))}
            {isMobile && menuItemsMobile.map((item, index) => (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            ))}
            
          </div>
        </div>
        <div className="footer__social">
          <h4 className="footer__title">Контакты</h4>
          <p>+7 555 555-55-55</p>
          <div className="footer__social-icons">
            <img src={Telegram} alt="telegram" width={20} height={20} />
            <img src={Viber} alt="viber" width={20} height={20} />
            <img src={WatsApp} alt="watsApp" width={20} height={20} />
          </div>
          <div>Москва, Путевой проезд 3с1, к 902</div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>©WELBEX 2022. Все права защищены.</p>
        <a>
        Политика конфиденциальности
        </a>
      </div>
    </div>
  );
}
