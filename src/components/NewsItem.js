import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let {title , description , imageUrl , url} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl?imageUrl:"https://image.cnbcfm.com/api/v1/image/107150199-1668131442672-gettyimages-1297565616-vcg111314319231.jpeg?v=1668131491&w=1920&h=1080"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} target="_blank" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
