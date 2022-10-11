import React from "react";
import './Header.scss'

export default function Header() {

    function homePageMove() {
        let bg = document.querySelector(".main");
        let header = document.querySelector(".header");
        const scrollBarWidth = 14;//17
        const startDelta = 100;
        var delta = window.scrollY;
        delta /= 2;
        delta = startDelta - delta;
        delta = Math.max(delta, 0);


        if (window.pageYOffset > 5 ) {

            if(window.screen.width <= 1023) {
                (bg as HTMLElement).style.width  = '100%'
            } else {
                window.innerWidth === document.documentElement.clientWidth ? (bg as HTMLElement).style.width  = `calc(100vw - ${delta}px)` : 
                (bg as HTMLElement).style.width  = `calc(100vw - ${delta}px - ${scrollBarWidth}px)`;
            }

            header?.classList?.add('header--is-scroll')

        } else { 
            header?.classList?.remove('header--is-scroll')
        }
    };

    window.onscroll = () => homePageMove();
    homePageMove();

    return (
        <header className="header">
            <div className="header__logo"></div>

            <div className="header__menu">
                <a className="header__phone" href="#">+7 495 981-01-85</a>
                <a className="header__client" href="#"> <i>+</i>Стать клиентом</a>
            </div>

            <div className="header__menu">
                <a className="header__link" href="#">Услуги</a>
                <a className="header__link" href="#">Кейсы</a>
            </div>

            <a className="header__burger"></a>
        </header>
    )
}