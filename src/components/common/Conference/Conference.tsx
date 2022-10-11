import React from "react"; 
import './Conference.scss'

interface IConference {
  photoColor:string,
  photoGray:string,
  name:string,
  job:string,
  themeTitle:string,
  themeDesc:string,
  day:string,
  time:string,
  arrow:boolean
}

export default function Conference({photoColor, photoGray, name, job, themeTitle, themeDesc, day, time, arrow}:IConference) {
  return (
    <div className="conference" data-scroll>
        <div className="conference__wrap">
          <div className="conference__author">
            <div className="conference__photo-color" style={{backgroundImage: `url(${photoColor})`}}></div>
            <div className="conference__photo-gray" style={{backgroundImage: `url(${photoGray})`}}></div>
            <div className="conference__info">
              <div className="conference__name">{name}</div>
              <div className="conference__job">{job}</div>
            </div>
          </div>
          <a className="conference__theme" href="#">
            <div className="conference__theme-title">{themeTitle}</div>
            <div className="conference__theme-desc">{themeDesc}
            {
              arrow 
              ?
              <svg viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696699C32.0434 0.403806 31.5685 0.403806 31.2756 0.696699C30.9828 0.989593 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75L36.5789 6.75V5.25L0 5.25L0 6.75Z">
                </path>
              </svg>
              :
              null
            }
            </div>
          </a>
          <div className="conference__date">
            <div className="conference__day">{day}</div>
            <div className="conference__time">{time}</div>
          </div>
        </div>
      </div>
  )
}