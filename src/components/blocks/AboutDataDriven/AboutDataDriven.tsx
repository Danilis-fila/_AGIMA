import React from "react";
import './AboutDataDriven.scss';

export default function AboutDataDriven() {
  return (
    <div className="about-data-driven">
      <div className="about-data-driven__title" data-scroll>Мы верим, что data-driven невозможен без использования самых мощных систем аналитики</div>
      <div className="about-data-driven__wrap" data-scroll>
        <div className="about-data-driven__text">
          <a href="#">Анализ данных</a> с премиальными инструментами:
        </div>
        <div className="about-data-driven__text">
          <a href="#">
            <img className="about-data-driven__img" src="https://www.agima.ru/upload/iblock/bfb/bfb9910fa719008d14cd9e4fd9dc56ce.png" />
          </a>
        </div>
        <div className="about-data-driven__text">
          <a href="#">
            <img className="about-data-driven__img" src="https://www.agima.ru/upload/iblock/699/6994f1c824ce1bc2e5ec9b7d9721f541.png" alt=""></img>
          </a>
        </div>
      </div>
    </div>
  )
}