import React from "react";
import './Footer.scss';

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer__links">
        <li className="footer__link"><a href="#">О компании</a></li>
        <li className="footer__link"><a href="#">Услуги</a></li>
        <li className="footer__link"><a href="#">Кейсы</a></li>
        <li className="footer__link"><a href="#">Стать клиентом</a></li>
        <li className="footer__link"><a href="#">Блог</a></li>
        <li className="footer__link"><a href="#">Работа в AGIMA</a></li>
        <li className="footer__link"><a href="#">Контакты</a></li>
      </ul>

      <a className="footer__phone" href="tel:+7 495 981-01-85">+7 495 981-01-85</a>
      <div className="footer__info">
        <span><small>© 2022 AGIMA.</small> <address>Москва, Петровка 19, стр. 4</address></span>
      </div>

      <ul className="footer__icons">
        <li className="footer__icon footer__icon--world"><a href="#"></a></li>
        <li className="footer__icon footer__icon--behance"><a href="#"></a></li>
        <li className="footer__icon footer__icon--vk"><a href="#"></a></li>
        <li className="footer__icon footer__icon--tg"><a href="#"></a></li>
        <li className="footer__icon footer__icon--habr"><a href="#"></a></li>
        <li className="footer__icon footer__icon--v"><a href="#"></a></li>
        <li className="footer__icon footer__icon--twitter"><a href="#"></a></li>
        <li className="footer__icon footer__icon--youtube"><a href="#"></a></li>
      </ul>
    </div>
  ) 
}