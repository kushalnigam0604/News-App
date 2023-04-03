import React from 'react'

function NewsItem({ title, description, imageUrl, url, source }) {
  return (
    <div>
    <div className="card my-3">
      <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
        <span
          className="badge rounded-pill text-bg-danger">
          {source}
        </span>
      </div>

      <img
        src={
          imageUrl
            ? imageUrl
            : "https://image.cnbcfm.com/api/v1/image/107150199-1668131442672-gettyimages-1297565616-vcg111314319231.jpeg?v=1668131491&w=1920&h=1080"
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a
          rel="noreferrer"
          href={url}
          target="_blank"
          className="btn btn-dark"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
  )
}

export default NewsItem
