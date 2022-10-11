import React from "react";
import './Blog.scss';

interface IBlog {
  im:string,
  hashtag:string,
  description:string,
  photo:string,
  name:string,
  time:string
}

export default function Blog({im, hashtag, description, photo, name, time}:IBlog) {
  return (
    <div className="blog">
      <a className="blog__img" href="#"
        style={{backgroundImage: `url(${im})`}}>
      </a>
      <div className="blog__info">
        <a href="#"># {hashtag}</a> {time}
      </div>
      <a className="blog__description" href="#" data-scroll>{description}</a>
      <div className="blog__author" data-scroll>
        <div className="blog__photo"
          style={{backgroundImage: `url(${photo})`}}>
        </div>
        <a className="blog__name" href="#">{name}</a>
      </div>
    </div>
  )
}