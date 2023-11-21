import React from "react";
import "./main-section.scss";
import { useMediaQuery } from "react-responsive";
import Line from "../../assets/icons/Line 9.svg";

export default function MainSection() {
  const items = [
    { title: "Виджеты", description: "30 готовых решений" },
    { title: "Dashboard", description: "с показателями вашего бизнеса" },
    { title: "Skype Аудит", description: "отдела продаж и CRM системы" },
    { title: "35 дней", description: "использования CRM" },
  ];
  const isMobile = useMediaQuery({ maxWidth: 360 });

  return (
    <div className="main-section">
      <div className="app-wrapper">
        <div className="main-section__earn">
          <h1 className="main-section__title">
            Зарабатывайте больше <br />
            <span>с WELBEX</span>
          </h1>
          <p>Развиваем и контролируем продажи за вас</p>
        </div>

        <div className="main-section__benefits">
          <div className="main-section__benefits-title">
            Вместе с <span>бесплатной консультацией</span> мы дарим:{" "}
          </div>
          <div className="main-section__benefits-items">
            {!isMobile ? (
              items.map((item, index) => (
                <div key={index}>
                  <h4 className="main-section__benefits-items-title">
                    {item.title}
                  </h4>
                  <p className="main-section__benefits-items-description">
                    {item.description}
                  </p>
                </div>
              ))
            ) : (
              <>
                <div className="main-section__benefits-items-mobile">
                  <div>
                    <div className="main-section__benefits-items-mobile-line">
                      <img src={Line} alt="line" />
                      <h4>Skype аудит</h4>
                    </div>
                    <div className="main-section__benefits-items-mobile-line">
                      <img src={Line} alt="line" />
                      <h4>Dashboard</h4>
                    </div>
                  </div>
                  <div>
                  <div className="main-section__benefits-items-mobile-line">
                      <img src={Line} alt="line" />
                      <h4>30 виджетов</h4>
                    </div>
                    <div className="main-section__benefits-items-mobile-line">
                      <img src={Line} alt="line" />
                      <h4>Месяц аmoCRM</h4>
                    </div>
                    
                  </div>
                </div>
              </>
            )}
          </div>
          {!isMobile && (
            <button className="main-section__benefits-button">
              Получить консультацию
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
