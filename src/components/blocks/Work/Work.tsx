import React from "react";
import './Work.scss';

export default function Work() {
  return (
    <div className="work">
      <div className="work__wrap">
        <div className="work__left-box" data-scroll>
          <h2 className="work__title">Работа у нас</h2>
          <p className="work__text">Настал тот самый момент, когда нам нужно еще больше свежих мозгов для самых смелых
            проектов!</p>
          <a className="work__link" href="#">Наша корпоративная культура</a>
        </div>
        <div className="work__right-box">
          <ul className="work__vacancies">
            <li className="work__vacancy" data-scroll><a href="#">Системный аналитик</a></li>
            <li className="work__vacancy" data-scroll><a href="#">IT-рекрутер (стажёр) / IT Recruiter (intern)</a></li>
            <li className="work__vacancy" data-scroll><a href="#">Flutter-разработчик (стажёр)</a></li>
            <li className="work__vacancy" data-scroll><a href="#">IOS-разработчик</a></li>
            <li className="work__vacancy" data-scroll><a href="#">PHP-разработчик (Bitrix)</a></li>
            <li className="work__vacancy" data-scroll><a href="#">Руководитель отдела frontend разработки (в группу компаний)</a></li>
          </ul>
          <a className="work__more" href="#">Другие вакансии
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