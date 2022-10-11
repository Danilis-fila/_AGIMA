import React, { useEffect, useState } from "react";
import './Popup.scss';

interface IPopup {
  video:string;
}

export default function Popup({video}:IPopup) {

  const closePopup = () => {
    const popup = document.querySelector(".popup");
    (popup as HTMLElement)!.style.visibility = "hidden";
  }
  
  return (
    <div className="popup" onClick={() => closePopup()}>
      <div className="popup__body">
        <div className="popup__content" >
          <a className="popup__close" onClick={() => closePopup()}></a>
          <iframe  id="popup__video" className="popup__video" src={video + "?" + new URLSearchParams({ autoplay: "1", loop: '1', autopause: "0"})}  frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}