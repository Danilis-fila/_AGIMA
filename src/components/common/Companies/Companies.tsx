import React from "react";
import './Companies.scss';

interface IIcons {
  leftIcon:string,
  centralIcon:string,
  rightIcon:string
}

export default function Companies({leftIcon, centralIcon, rightIcon}:IIcons) {
  return (
    <div className="companies">
      <div className="companies__icon" 
        style={{backgroundImage: `url(${leftIcon})`}} 
      ></div>
      <div className="companies__icon" 
        style={{backgroundImage: `url(${centralIcon})`}} 
      ></div>
      <div className="companies__icon" 
        style={{backgroundImage: `url(${rightIcon})`}} 
      ></div>
    </div>
  )
}