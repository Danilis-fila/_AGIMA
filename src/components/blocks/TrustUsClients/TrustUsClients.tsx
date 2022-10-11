import React from "react";
import './TrustUsClients.scss';
import Companies from "../../common/Companies/Companies";

export default function TrustUsClients() {

  window.addEventListener('scroll', () => {
    const wrap = document.querySelector(".trust-us-clients__wrap")
    const wrapHeight = wrap!.getBoundingClientRect()
    const win = window.innerHeight - wrapHeight.top;
    if (win > 0) {
      (wrap as HTMLElement)!.style.transform = `translateY(${-win / 5}px)`
    }
  })

  return (
    <div className="trust-us-clients" data-scroll>
    <div className="trust-us-clients__left-box">
      <h2 className="trust-us-clients__title" data-scroll>Нам доверяют</h2>
      <span className="trust-us-clients__description" data-scroll>Поработали с крупнейшими страховыми компаниями, банками, ритейл,
        автомобильными брендами, государственными проектами, eСommerce, СМИ и другими.</span>
      <a href="#" className="trust-us-clients__link" data-scroll>+ Стать клинетом</a>
    </div>

    <div className="trust-us-clients__right-box">
      <div className="trust-us-clients__wrap">
        <Companies
          leftIcon='/images/companies/Allianz.png'
          centralIcon='/images/companies/Center.png' 
          rightIcon ='/images/companies/WorldClass.png'
        ></Companies>

        <Companies
          leftIcon='/images/companies/Magnit.png'
          centralIcon='/images/companies/PhilipMorris.png' 
          rightIcon ='/images/companies/Pyterochka.png'
        ></Companies>

        <Companies
          leftIcon='/images/companies/Alpha.png'
          centralIcon='/images/companies/LeroyMerlin.png' 
          rightIcon ='/images/companies/VTB.png'
        ></Companies>

        <Companies
          leftIcon='/images/companies/AliExpress.png'
          centralIcon='/images/companies/GasFund.png' 
          rightIcon ='/images/companies/Crossroads.png'
        ></Companies>

        <Companies
          leftIcon='/images/companies/PWC.png'
          centralIcon='/images/companies/Eldorado.png' 
          rightIcon ='/images/companies/TACC.png'
        ></Companies>

        <Companies
          leftIcon='/images/companies/Agreement.png'
          centralIcon='/images/companies/ExportCenter.png' 
          rightIcon ='/images/companies/RGRU.png'
        ></Companies>

        <Companies
          leftIcon='/images/companies/Kuntsevo.png'
          centralIcon='/images/companies/Merchant.png' 
          rightIcon ='/images/companies/IKEA.png'
        ></Companies>

        <Companies
          leftIcon='/images/companies/ROSGOSSTRAH.png'
          centralIcon='/images/companies/MercedesBenz.png' 
          rightIcon ='/images/companies/Tanuki.png'
        ></Companies>

        <Companies
          leftIcon='/images/companies/Statements.png'
          centralIcon='/images/companies/SnowQueen.png' 
          rightIcon ='/images/companies/INGOSSTRAH.png'
        ></Companies>
      </div>
    </div>
  </div>
  )
}