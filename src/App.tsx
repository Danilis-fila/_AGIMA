import React, { useEffect, useState, useContext } from 'react';
import './App.scss';
import Header from './components/blocks/Header/Header';
import Background from './components/blocks/Background/Background';
import Slider from './components/blocks/Slider/Slider';
import Promo from './components/blocks/Promo/Promo';
import PromoProjects from './components/sections/PromoProjects/PromoProjects';
import PromoAbout from './components/blocks/PromoAbout/PromoAbout';
import AboutDataDriven from './components/blocks/AboutDataDriven/AboutDataDriven';
import TrustUs from './components/blocks/TrustUs/TrustUs';
import TrustUsClients from './components/blocks/TrustUsClients/TrustUsClients';
import SpecialProjects from './components/blocks/SpecialProjects/SpecialProjects';
import OurConferences from './components/blocks/OurConferences/OurConferences';
import Blogs from './components/blocks/Blogs/Blogs';
import Work from './components/blocks/Work/Work';
import Footer from './components/blocks/Footer/Footer';
import Popup from './components/blocks/Popup/Popup';


function App() {

  window.addEventListener('scroll', (e) => {
    const animateElements = document.querySelectorAll('[data-scroll]');

    animateElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const win = window.innerHeight - rect.top;
        if (win > 0) {
            element.classList.add('is-ready')
        } else {
            element.classList.remove('is-ready')
        }
    })
  })

  useEffect(() => {
    const animateElements = document.querySelectorAll("[data-scroll]");
      animateElements.forEach((element) => {
          element.classList.add('animate-view')
      })
  }, [])

  const [video, setVideo] = useState("")

  const onClickChange = (video:string) => {
    setVideo(video);
    console.log(video)
  }

  return (
      <div className="App">
        <Popup video={video}></Popup>
        <Header></Header>
        <Background></Background>
        <div className="main">
          <div className="main__title">AGIMA создает веб-сервисы и мобильные приложения для бизнеса на основе данных и здравого смысла</div>
          <Slider></Slider>
          <Promo></Promo>
          <PromoProjects></PromoProjects>
          <PromoAbout onClick={onClickChange}></PromoAbout>
          <AboutDataDriven></AboutDataDriven>
          <TrustUs></TrustUs>
          <TrustUsClients></TrustUsClients>
          <SpecialProjects onClick={onClickChange}></SpecialProjects>
          <OurConferences></OurConferences>
          <Blogs></Blogs>
          <Work></Work>
        </div>
        <Footer></Footer>
      </div>
  )
}

export default App;
