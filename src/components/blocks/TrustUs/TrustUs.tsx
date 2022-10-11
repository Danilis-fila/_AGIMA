import React from "react";
import './TrustUs.scss';

export default function TrustUs() {
  return (
    <div className="trust-us">
      <div className="trust-us__title" data-scroll>Мы давно занимаем топовые позиции в отраслевых рейтингах
        <a href="#" className="">
          <svg viewBox="0 0 38 12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path
              d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696699C32.0434 0.403806 31.5685 0.403806 31.2756 0.696699C30.9828 0.989593 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75L36.5789 6.75V5.25L0 5.25L0 6.75Z">
            </path>
          </svg>
        </a>
      </div>

      <div className="trust-us__ratings" data-scroll>
        <div className="trust-us__rating-item">
          <div className="trust-us__rating-value">1</div>
          <div className="trust-us__rating-info">
            <div className="trust-us__rating-text">
              <span>2020</span>
              <img src="https://www.agima.ru/upload/resize_cache/uf/5c3/20_20_0/5c358cad4ea2c193dcdb83872e8a9828.png" alt="" className="trust-us__rating-icon"></img>
              Tagline
            </div>
            <div className="trust-us__rating-desc">Веб-интеграторы</div>
          </div>
        </div>

        <div className="trust-us__rating-item">
          <div className="trust-us__rating-value">1</div>
          <div className="trust-us__rating-info">
            <div className="trust-us__rating-text">
              <span>2021</span>
              <img src="https://www.agima.ru/upload/resize_cache/uf/1be/20_20_0/1be6f55b9acaaaf5c5b3a54ff136bfda.jpg" alt="" className="trust-us__rating-icon"></img>
              Рейтинг Рунета
            </div>
            <div className="trust-us__rating-desc">Рейтинг веб-студий — лучшие разработчики сайтов</div>
          </div>
        </div>

        <div className="trust-us__rating-item">
          <div className="trust-us__rating-value">1</div>
          <div className="trust-us__rating-info">
            <div className="trust-us__rating-text">
              <span>2021</span>
              RUWARD
            </div>
            <div className="trust-us__rating-desc">Highload-разработка сложных digital-проектов</div>
          </div>
        </div>
      </div>
    </div>
  )
}