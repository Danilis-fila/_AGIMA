import React, { useCallback, useEffect, useRef, useState } from "react";
import Blog from "../../common/Blog/Blog";
import './Blogs.scss';

export default function Blogs() {
  const [blogListMobile, setBlogListMobile] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(0);
  const blogListElement = useRef<HTMLDivElement>(null);

  const totalBlogs = 3;

  const previousBlog = useCallback(() => {
    setCurrentBlog(currentBlog => currentBlog - 1 < 0 ? currentBlog : currentBlog - 1);
  }, []);

  const nextBlog = useCallback(() => {
    setCurrentBlog(currentBlog => currentBlog + 1 > totalBlogs - 1 ? currentBlog : currentBlog + 1);
  }, []);

  const checkMobile = useCallback(() => {
    if (window.innerWidth < 768) {
      setBlogListMobile(true)
    } else {
      setBlogListMobile(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', checkMobile);
    checkMobile();
    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  useEffect(() => {
    if (blogListMobile) {
      if (!blogListElement.current) return;
      blogListElement.current.style.transform = `translateX(-${currentBlog}00vw)`;
    } else {
      if (!blogListElement.current) return;
      blogListElement.current.style.transform = `none`;
    }
  }, [blogListMobile, currentBlog]);

  return (
    <div className="blogs" data-scroll>
      <h2 className="blogs__title">Блог
        <a className="blogs__title-link" href="#">
          <svg viewBox="0 0 38 12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path
              d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696699C32.0434 0.403806 31.5685 0.403806 31.2756 0.696699C30.9828 0.989593 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75L36.5789 6.75V5.25L0 5.25L0 6.75Z">
            </path>
          </svg>
        </a>
      </h2>

      <div className="blogs__list-hider">
        <div className="blogs__list" data-scroll ref={blogListElement}>
          <Blog
            im='https://www.agima.ru/upload/resize_cache/iblock/349/700_700_0/349229ad8ccc868f57f8a14d0a21414d.png' 
            hashtag='Разработка' 
            description='Вот как мы поняли, что нам нужно больше стажеров' 
            photo='https://www.agima.ru/upload/resize_cache/uf/c95/100_100_0/c9557ea9d662de466e0ddf334473d692.PNG' 
            name='Алексей Половинкин'
            time='08 сентября 2022'
          ></Blog>

          <Blog
            im='https://www.agima.ru/upload/resize_cache/iblock/eba/700_700_0/ebaab005fe90301d86b2613db5dd9477.png' 
            hashtag='Команда' 
            description='AGIMA Partners’ Weekend: как мы провели два дня в «Космосе»' 
            photo='https://www.agima.ru/upload/resize_cache/uf/975/100_100_0/97570e87d5c5d97be31358b15d831b9a.jpg' 
            name='Кристина Ляпцева'
            time='07 сентября 2022'
          ></Blog>

          <Blog
            im='https://www.agima.ru/upload/resize_cache/iblock/349/700_700_0/349229ad8ccc868f57f8a14d0a21414d.png' 
            hashtag='Аналитика' 
            description='Разработка системы рекомендаций для YouTravel' 
            photo='https://www.agima.ru/upload/resize_cache/uf/535/100_100_0/535839c504689f9edb7fe2d1c3e693c9.jpg' 
            name='Андрей Татаринов'
            time=' 06 сентября 2022'
          ></Blog>
        </div>
      </div>

      <div className="blogs__controls">
        <button className="blogs__controls-previous" onClick={previousBlog}>
          <svg viewBox="0 0 38 12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <path
                d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696699C32.0434 0.403806 31.5685 0.403806 31.2756 0.696699C30.9828 0.989593 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75L36.5789 6.75V5.25L0 5.25L0 6.75Z">
              </path>
          </svg>
        </button>
        <span className="blogs__controls-counter">
          <i>{currentBlog + 1}</i>
          {' / '}
          <span>{totalBlogs}</span>
        </span>
        <button className="blogs__controls-next" onClick={nextBlog}>
          <svg viewBox="0 0 38 12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path
              d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696699C32.0434 0.403806 31.5685 0.403806 31.2756 0.696699C30.9828 0.989593 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75L36.5789 6.75V5.25L0 5.25L0 6.75Z">
            </path>
          </svg>
        </button>
      </div>
    </div>
  )
}