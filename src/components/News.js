import React, { useState , useEffect} from "react";
import NewsItem from "./NewsItem";
import API_DATA from "../API_Data.json";
import InfiniteScroll from "react-infinite-scroll-component";

function News({category}) {
  const [article,setArticle] = useState([]);
  const [totalResults,setTotalResults] = useState();

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
      case 'general':
        return setArticle(API_DATA.general.articles);
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

  // fetchMoreData = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b325af301e041f0be761e13a412ad0d&page=${this.state.page + 1}&pagesize=9`;
  //   this.setState({ page: this.state.page + 1 });
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   // console.log(parseData);
  //   this.setState({
  //     article: this.state.article.concat(parseData.articles),
  //     totalResults: parseData.totalResults,
  //   });
  // };
  return (
    <>
        <h1 className="text-center" style={{ margin: "40px" , marginTop: "90px" }}>
          News App - Top {capitalizeFirstLetter(category)}{" "}
          Headlines
        </h1>

        {/* <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalResults}
          loader={<h5>Loading...</h5>}
        > */}
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
        {/* </InfiniteScroll> */}
      </>
  )
}

export default News

