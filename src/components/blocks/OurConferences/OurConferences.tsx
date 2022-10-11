import React from "react";
import Conference from "../../common/Conference/Conference";
import './OurConferences.scss';

export default function OurConferences() {
  return (
    <div className="our-conferences">
      <div className="our-conferences__header" data-scroll>
        <h2 className="our-conferences__title" >Мы на конференциях</h2>
        <a className="our-conferences__link" href="#">Видео с выступлений</a>
      </div>

      <Conference
        photoColor='https://www.agima.ru/upload/resize_cache/uf/696/80_80_2/69638004ed1f71e4fd70730ce3961a1a.jpg' 
        photoGray='https://www.agima.ru/upload/resize_cache/uf/b66/80_80_2/b660f8f632d08ddb6d0d460737815cb1.jpg' 
        name='Елена Маеркина'
        job='СРО' 
        themeTitle='Конференция Яндекса для Паблишеров' 
        themeDesc='Создание сайта от идеи до запуска' 
        day='28 сентября' 
        time='среда, 12:05'
        arrow={false}
      ></Conference>

      <Conference
        photoColor='https://www.agima.ru/upload/resize_cache/uf/e2c/80_80_2/e2c7a6a8bc150661d46f618c86e4daac.jpg' 
        photoGray='https://www.agima.ru/upload/resize_cache/uf/075/80_80_2/075e0fef9411e26c4efe0b572969941c.jpg' 
        name='Ольга Татаринова'
        job='Co-founder of AGIMA AI' 
        themeTitle='New Retail Forum 2022' 
        themeDesc='Как с помощью ML-модели предсказывать эффективность рекламных кампаний' 
        day='29 сентябр' 
        time='четверг, 10:00'
        arrow={true}
      ></Conference>

      <Conference
        photoColor='https://www.agima.ru/upload/resize_cache/uf/a4d/80_80_2/a4d048e65701a05f845c726485a885f3.jpeg' 
        photoGray='https://www.agima.ru/upload/resize_cache/uf/2be/80_80_2/2beee45682b4ecbb99f81d8153899c4a.jpeg' 
        name='Дмитрий Шувалов'
        job='Руководитель компании «Интегральный дизайн»' 
        themeTitle='Маркетинг 360' 
        themeDesc='Сервисный-дизайн - искусство проектирования человеческого опыта' 
        day='6 октября' 
        time='четверг, 12:00'
        arrow={true}
      ></Conference>
    </div>
  )
}