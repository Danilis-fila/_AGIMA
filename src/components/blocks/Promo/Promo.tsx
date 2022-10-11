import React from "react";
import './Promo.scss';

export default function Promo() {
  return (
    <div className="promo" data-scroll>
    <div className="promo__wrap">
      <div className="promo__left">
        <h2 className="promo__left-title">Machine learning & <span> Artificial intelligence</span> </h2>
        <a className="button-read-more" href="#">Подробнее
          <svg viewBox="0 0 38 12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path
              d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696699C32.0434 0.403806 31.5685 0.403806 31.2756 0.696699C30.9828 0.989593 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75L36.5789 6.75V5.25L0 5.25L0 6.75Z">
            </path>
          </svg>
        </a>
      </div>

      <div className="promo__center">
        <div className="promo__center-title">Создаем проекты в области машинного обучения и анализа данных</div>
        <div className="promo__center-text">Ускоряем бизнес, автоматизируем рутину и силой алгоритмов делаем то, что раньше было слишком долго делать руками.</div>
      </div>

      <div className="promo__right">
        <img className="promo__img" src="https://www.agima.ru/upload/content/Andrey-ml-photo.jpg" alt=""></img>
      </div>
    </div>
  </div>
  )
}