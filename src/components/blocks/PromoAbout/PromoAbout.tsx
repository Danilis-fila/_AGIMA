import React from "react";
import Popup from "../Popup/Popup";
import './PromoAbout.scss'

export default function PromoAbout({onClick}:any) {

  function outNum(value:number, time:number, step:number, elem:string) {
    let l = document.querySelector(elem)
    let n:number = 0;
    let t = Math.round(time / (value / step));
    let interval = setInterval(() => {
      n = n + step;
      if (n === value) {
        clearInterval(interval);
      }
      l!.textContent = `${n}`;
    }, t);
  }
  
  let was = true;
  window.addEventListener('scroll', (e) => {
    const animateElements = document.querySelector(".promo-about__specialists");
    const rect = animateElements!.getBoundingClientRect()
    const win = window.innerHeight - rect.top;
    if (win + 300 > 0 && was ) {
      was = false;
      outNum(165, 3500, 1, '.specialists-count');
      outNum(550, 4500, 1, '.case-count');
      outNum(65, 4000, 1, '.awards-count');
      outNum(15, 5000, 1, '.experience-count');
    }
  })

  const onVideoView = (video:string) => {
    onClick(video)
    const popup = document.querySelector(".popup");
    (popup as HTMLElement)!.style.visibility = "visible";
  }

  return (
    <div className="promo-about">
      <div className="promo-about__top-text" data-scroll>С 2006 года мы работаем с большими продуктами, эволюцию которых можно наблюдать
        в течение многих лет.
      </div>

      <div className="promo-about__heading" data-scroll>
        <div className="promo-about__video">
          <div style={{overflow: "hidden", position: 'relative'}}>
            <img className="promo-about__video-img" src="https://www.agima.ru/upload/resize_cache/agima/7c0/1131_636_1/7c08c57e806942d205c3491e08000fd6.jpg" alt=""></img>
            <div  className="promo-about__button-play" onClick={() => onVideoView("https://player.vimeo.com/video/433704389")}></div>
            <h2 className="promo-about__button-play-info">«AGIMA — это удивительный коллектив»</h2>   
          </div>
        </div>
        <div className="promo-about__video-description">
          <h2>О компании</h2>
          <div data-scroll>AGIMA — digital-продакшн полного цикла, с собственной
            <a href=""> продуктовой аналитикой, дизайном, веб- и мобильной разработкой.</a>
          </div>
        </div>
      </div>

      <div className="promo-about__numbers">
        <div className="promo-about__specialists" data-scroll>
          <div className="promo-about__specialists-count">
            <h2 className="specialists-count">165</h2>
            <p> специалистов <br></br> в штате</p>
          </div>
          <div className="promo-about__specialists-description">
            <h2> Все необходимые <a href="#">специальности</a> — от арт‑директора до тестировщика — у нас в штате. Мы нанимаем лучших специалистов на рынке. Это дорого, но того стоит.</h2>
            <a className="promo-about__specialists-btn" href="#">О компании
              <svg viewBox="0 0 38 12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path
                  d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696699C32.0434 0.403806 31.5685 0.403806 31.2756 0.696699C30.9828 0.989593 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75L36.5789 6.75V5.25L0 5.25L0 6.75Z">
                </path>
              </svg>
            </a>
          </div>
        </div>

        <div className="promo-about__other" data-scroll>
          <div className="promo-about__other-number promo-about__other-number--more-then">
            <h2 className="case-count">550</h2>
            <p>успешных <br></br> кейсов</p>
          </div>
          <div className="promo-about__other-number">
            <h2 className="awards-count">65</h2>
            <p>наград</p>
          </div>
          <div className="promo-about__other-number">
            <h2 className="experience-count">15</h2>
            <p>лет <br></br> опыта</p>
          </div>
        </div>
      </div>
    </div>
  )
} 