import React, { ReactNode, useCallback, useEffect, useState } from "react";
import sliderData from './SliderData.json';
import './Slider.scss';

export default function Slider() {
  const [currSlide, setCurrSlide] = useState(-1);
  const [mobileView, setMobileView] = useState(false);

  const tabSlide = useCallback((index:number) => {
    setCurrSlide(index);
  }, [setCurrSlide]);

  const nextSlide = useCallback(() => {
    setCurrSlide(currSlide => (currSlide + 1) % 3);
  }, [setCurrSlide]);

  const checkMobileView = useCallback(() => {
    if (window.innerWidth < 768) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }, []);

  useEffect(() => {
    setCurrSlide(0);
    window.addEventListener('resize', checkMobileView);
    checkMobileView();

    return () => {
      window.removeEventListener('resize', checkMobileView);
    };
  }, [checkMobileView]);

  useEffect(() => {
    const timeoutSnapshot = setTimeout(nextSlide, 10000);
    return () => clearTimeout(timeoutSnapshot);
  }, [currSlide, nextSlide]);

  useEffect(() => {
    const slides = Array.from(document.getElementsByClassName('slide'));

    slides.forEach((slide: Element) => {
      slide.addEventListener('mouseup', nextSlide);
    });

    return () => {
      slides.forEach((slide: Element) => {
        slide.removeEventListener('mouseup', nextSlide);
      });
    };
  }, [nextSlide]);

  return (
    <div className="slider" data-scroll>
      {sliderData.map((slideData, slideIndex) => {
        let offset;
        if (mobileView) {
          const gap = 25;
          const activeIsLast = currSlide === 2;
          const slides = document.getElementsByClassName('slide');
          const slideRect = slides[slideIndex].getBoundingClientRect();
          const slideWidth = slideRect.width;
          const basicOffset = (slideIndex - currSlide) * (slideWidth + gap);
          offset = activeIsLast ? basicOffset + 50 : basicOffset;
        } else {
          offset = 0;
        }
        return (
          <Slide
            title={slideData.title}
            descriptionTitle={slideData.descriptionTitle}
            descriptionText={slideData.descriptionText}
            tags={slideData.tags}
            slideIndex={slideIndex}
            currSlide={currSlide}
            slideOffset={offset}
            key={slideIndex}
          />
        );
      })}

      <a className="slider__next" onClick={() => nextSlide()}>
        <svg viewBox="0 0 38 12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path
            d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696699C32.0434 0.403806 31.5685 0.403806 31.2756 0.696699C30.9828 0.989593 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75L36.5789 6.75V5.25L0 5.25L0 6.75Z">
          </path>
        </svg>
      </a>

      <div className="slider__footer">
        <div className="slider__menu">
          {sliderData.map((slideData, slideIndex) => (
            <a className={`slider__menu-item ${currSlide === slideIndex ? 'slider__menu-item--active' : ''}`} onClick = {() => tabSlide(slideIndex)} key={slideIndex}>{slideData.title}
              <svg className='slider__menu-loader'  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <circle cx="8" cy="8" r="6" strokeWidth="2.5"></circle>
                <circle cx="8" cy="8" r="6"></circle>
              </svg>
            </a>
          ))}
        </div>
        <div className="slider__tags">
          {sliderData.map((slideData, slideIndex) => (
            <div className={`slider__tags-slide ${currSlide === slideIndex ? 'slider__tags-slide--active' : ''}`}>
              {slideData.tags.map((tag, index) => (
                <a className="slider__tags-item" href="#" key={index}>{tag}</a>
              ))}
            </div>
          ))}
       </div>
      </div>
    </div>
  )
}

interface ISlide {
  className?: string;
  title: ReactNode;
  descriptionTitle: ReactNode;
  descriptionText: ReactNode;
  tags: ReactNode[];
  slideIndex: number;
  currSlide: number;
  slideOffset: number;
}

const Slide = ({ className = '', title, descriptionTitle, descriptionText, tags, slideIndex, currSlide, slideOffset } : ISlide ) => {
  return (
    <div className={`slide ${currSlide === slideIndex ? 'slide--active' : ''} ${className}`} style={{transform: `translateX(${slideOffset}px)`}}>
      <i className="slide__number">{slideIndex + 1}</i>
      <a className="slide__title" href="/#">{title}</a>
      <a className="slide__button" href="/#">Наш подход
        <svg viewBox="0 0 61 16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path
            d="M60.7071 8.70711C61.0976 8.31658 61.0976 7.68342 60.7071 7.29289L54.3431 0.928932C53.9526 0.538408 53.3195 0.538408 52.9289 0.928932C52.5384 1.31946 52.5384 1.95262 52.9289 2.34315L58.5858 8L52.9289 13.6569C52.5384 14.0474 52.5384 14.6805 52.9289 15.0711C53.3195 15.4616 53.9526 15.4616 54.3431 15.0711L60.7071 8.70711ZM0 9L60 9V7L0 7L0 9Z">
          </path>
        </svg>
      </a>
      <div className="slide__description">
        <a className="slide__description-title" href="/#">{descriptionTitle}</a>
        <p className="slide__description-text">{descriptionText}</p>
      </div>
      <div className="slide__tags">
        {tags.map((tag, index) => (
          <a className="slide__tags-item" href="/#" key={index}>{tag}</a>
        ))}
      </div>
    </div>
  );
};
