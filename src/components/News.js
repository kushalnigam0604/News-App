import React, { useState , useEffect} from "react";
import NewsItem from "./NewsItem";
import API_DATA from "../API_Data.json";

function News({category}) {
  const [article,setArticle] = useState([]);

  function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  useEffect(() => {
    switch (category) {
      case 'general':
        return setArticle(API_DATA.general.articles);
      case 'business':
        return setArticle(API_DATA.business.articles);
      case 'entertainment':
        return setArticle(API_DATA.entertainment.articles);
      case 'health':
        return setArticle(API_DATA.health.articles);
      case 'science':
        return setArticle(API_DATA.science.articles);
      case 'sports':
        return setArticle(API_DATA.sports.articles);
      case 'technology':
        return setArticle(API_DATA.technology.articles);
      default:
        return setArticle(API_DATA.general.articles);
    }
  },[category])

  return (
    <>
        <h1 className="text-center" style={{ margin: "40px" , marginTop: "90px" }}>
          News App - Top {capitalizeFirstLetter(category)}{" "}
          Headlines
        </h1>
          <div className="container">
            <div className="row">
              {article.map((element , key) => {
                return (
                  <div className="col-md-4" key={key}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      url={element.url}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
      </>
  )
}

export default News

