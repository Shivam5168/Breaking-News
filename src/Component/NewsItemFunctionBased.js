import React from 'react';
import blankImage from "../assets/blank_image.avif";
const NewsItemFunctionBased = (props) => {
    let { title, description, imageUrl, url, publishedAt, source, author } = props;
    const date = new Date(publishedAt);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZone: 'Asia/Kolkata'
    };
  return (
    <div>
    <div className="card" style={{ width: "18rem" }}>
    <a href={url} target='_blank'>
    <img className="card-img-top" src={imageUrl || blankImage} alt="Card image cap" style={{ cursor: "pointer", transition: "transform 1s"}} onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"} onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}/>
  </a>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p>{date.toLocaleString('en-In', options)}</p>
        <p> Author name is "{author}" and The news Source is "{source}"</p>
        <a href={url} target='_blank' className="btn btn-primary">Click to Read More</a>
      </div>
    </div>
  </div>
  )
}

export default NewsItemFunctionBased