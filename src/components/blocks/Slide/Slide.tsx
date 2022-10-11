import React from "react";
import './Slide.scss'

const slideList = [
  {
    number: 1,
    title: "Стратегия",
    descriptionTitle: "Помогаем спланировать развитие бизнеса в различных digital-каналах",
    descriptionText: "Проводим качественные и количественные исследования, чтобы лучше понять ваш продукт и его пользователей и предложить решения на долгую перспективу.",
  },
  {
    number: 2,
    title: "Разработка",
    descriptionTitle: "Реализовываем самые сложные интернет-проекты полностью своими силами",
    descriptionText: "Одна из самых больших команд в России. У нас несколько сотен проектных менеджеров, дизайнеров, проектировщиков и программистов с серьезным опытом работы в крупных проектах.",
  },
  {
    number: 3,
    title: "Развитие",
    descriptionTitle: "Успех digital-продукта — это сумма маленьких побед",
    descriptionText: "Разделяем философию HADI-циклов, итеративной разработки. Тестируем, анализируем, предлагаем оптимальные решения. Говорим на языке бизнеса. Ориентируемся на пользователя. Предлагаем SLA с финансовой ответственностью.",
  },
]


export default function Slide() {

  return (
  <>
    {
      slideList.map((item) => {
        return (
          <div className="slide">
            <i data-scroll >{item.number}</i>
            <a className="slide__title" href="#">{item.title}</a>
            <a className="slide__button" href="#">Наш подход
              <svg viewBox="0 0 61 16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path
                  d="M60.7071 8.70711C61.0976 8.31658 61.0976 7.68342 60.7071 7.29289L54.3431 0.928932C53.9526 0.538408 53.3195 0.538408 52.9289 0.928932C52.5384 1.31946 52.5384 1.95262 52.9289 2.34315L58.5858 8L52.9289 13.6569C52.5384 14.0474 52.5384 14.6805 52.9289 15.0711C53.3195 15.4616 53.9526 15.4616 54.3431 15.0711L60.7071 8.70711ZM0 9L60 9V7L0 7L0 9Z">
                </path>
              </svg>
            </a>
            <div className="slide__description">
              <a className="slide__description-title">{item.descriptionTitle}</a>
              <p className="slide__description-text">{item.descriptionText}</p>
            </div>
          </div>
        )
      })
    }
  </>
  )
}