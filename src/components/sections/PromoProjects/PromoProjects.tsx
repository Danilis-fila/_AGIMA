import React from "react";
import Card from "../../common/Card/Card";
import Video from "../../common/Video/Video";
import './PromoProjects.scss'

export default function PromoProjects() {
  return (
    <div className="promo-projects">
      <h2 className="promo-project__title promo-project__title--mobile">Работы</h2>
      <div className="promo-project__list">
        <div className="promo-project promo-project__indents" data-scroll>
          <div className="promo-project__wrap">
            <h2 className="promo-project__title">Работы</h2>
            <a className="promo-project__text" href="#">«Пятёрочка» продуктовые команды</a>
          </div>

          <Video
            id="video-large1"
            video="https://www.agima.ru/upload/iblock/a29/a29371ba8e36d7a7614c3896000fa9b1.mp4"
            img="https://www.agima.ru/upload/iblock/ae4/ae442b3ac0fd9ea598b5633efb5138d5.jpg"
            views={2358}
            awards={false}
            awardsCount={0}
          ></Video>
        </div>

        <div className="promo-project promo-project__indents" data-scroll>
          <Card 
            id = "video2"
            title='Мобильное приложение «СберСпасибо»'
            views={8087}
            im='https://www.agima.ru/upload/iblock/a4d/a4d836e56a7532ed47fe200fe08096df.png'
            video="https://www.agima.ru/upload/iblock/586/586d62c6fb0d31576c916becb5d0d7d6.mp4"
            award={true}
          ></Card>

          <Card 
            id = "video3"
            title="Мобильное приложение O'STIN"
            views={5144}
            im='https://www.agima.ru/upload/iblock/f1e/f1e651cc71f429adff6c90ab1a22ddbb.jpg'
            video="https://www.agima.ru/upload/iblock/c0c/c0ced6937ebd4587d9e8372eebcfa25c.mp4"
            award={false}
          ></Card>

          <Card 
            id = "video4"
            title="Чат-бот для сервиса услуг"
            views={190}
            im='https://www.agima.ru/upload/iblock/8bd/8bd0c9f5388e3ada6453e11188355c72.png'
            video="https://www.agima.ru/upload/iblock/ae4/ae4d6858782e1d0a8e538ac349d5e330.mp4"
            award={false}
          ></Card>
        </div>

        <div className="promo-project promo-project__indents" data-scroll>
          <Video
            id="video-large2"
            img="https://www.agima.ru//upload/iblock/928/92851bfa8550da5fbc10a67702b2940a.jpg"
            video=""
            views={4122}
            awards={true}
            awardsCount={6}
          ></Video>
          <div className="promo-project__wrap">
            <a className="promo-project__text" href="#">Сервис для заботы о домашних питомцах Petstory</a>
          </div>
        </div>


        <div className="promo-project promo-project__indents" data-scroll>
          <Card 
            id = "video5"
            title="Помогаем развивать «Эльдорадо» в digital"
            views={4892}
            im='https://www.agima.ru/upload/iblock/71d/71d1999ecbaf5c6ae3a72ef921f08ae9.jpg'
            video=""
            award={true}
          ></Card>
          
          <Card 
            id = "video6"
            title="Продуктовая аналитика в «Леруа Мерлен»"
            views={2827}
            im='https://www.agima.ru/upload/iblock/911/9118153239c0c4205305015ab439d1fd.jpg'
            video=""
            award={true}
          ></Card>
          
          <Card 
            id = "video7"
            title="Сайт и приложение Mycar.kz"
            views={12672}
            im='https://www.agima.ru/upload/iblock/671/67159bbfebfbb60c41ca8642cd3b2444.jpg'
            video="https://www.agima.ru/upload/iblock/62a/62aa00dfbc2346e14d27ca660d1f4c45.mp4"
            award={true}
            ></Card>
        </div>

        <div className="promo-projects__button">
          <a className="button-read-more" href="#">Все проекты 
            <svg viewBox="0 0 38 12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <path
                d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696699C32.0434 0.403806 31.5685 0.403806 31.2756 0.696699C30.9828 0.989593 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75L36.5789 6.75V5.25L0 5.25L0 6.75Z">
              </path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}