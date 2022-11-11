import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles = [
    {
      "source": {
        "id": "bbcnews",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Bao Tong: Champion of Chinese political reform dies at 90",
      "description": "A reformist turned dissident, Bao Tong was jailed for sympathising with the Tiananmen protesters.",
      "url": "http://www.bbc.co.uk/news/worldasiachina63581532",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BB69/production/_127577974_7ed0fa28c4b3ff4e7769efdfbdcf239bc82e9f49.jpg",
      "publishedAt": "20221110T10:07:22.7956772Z",
      "content": "Bao Tong, the most senior Communist Party official imprisoned over the Tiananmen protests that shook Beijing in 1989, has died at 90.\r\nBut even as Chinese activists the world over mourn his passing, … [+4240 chars]"
    },
    {
      "source": {
        "id": "bbcnews",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Paul Allen: Recordbreaking $1.5bn art sale for late Microsoft cofounder's collection",
      "description": "Art belonging to late Microsoft cofounder Paul Allen is sold at the largest art auction in history.",
      "url": "http://www.bbc.co.uk/news/entertainmentarts63582013",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BB69/production/_127577974_7ed0fa28c4b3ff4e7769efdfbdcf239bc82e9f49.jpg",
      "publishedAt": "20221110T09:52:20.0478545Z",
      "content": "Paintings and sculptures owned by late Microsoft cofounder Paul Allen have been sold for a record $1.5bn (£1.3bn).\r\nIt was the largest art auction in history, according to Christie's.\r\nThe auction h… [+1633 chars]"
    },
    {
      "source": {
        "id": "bbcnews",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Moment UN chief realises he's reading the wrong speech",
      "description": "Antonio Guterres apologises after being given a speech intended for an event for young people at COP27.",
      "url": "http://www.bbc.co.uk/news/world63581486",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BB69/production/_127577974_7ed0fa28c4b3ff4e7769efdfbdcf239bc82e9f49.jpg",
      "publishedAt": "20221110T09:22:23.4998591Z",
      "content": "The United Nations Secretary General sparked a few moments of laughter at COP27 when he started to read from the wrong speech. \r\nHis staff quickly brought him the correct papers and he explained he w… [+94 chars]"
    },
    {
      "source": {
        "id": "bbcnews",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "US midterms: Why a Republican 'wave' never happened",
      "description": "Economic concerns and Joe Biden's disapproval rating failed to deliver the results that Republicans hoped for.",
      "url": "http://www.bbc.co.uk/news/worlduscanada63569850",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BB69/production/_127577974_7ed0fa28c4b3ff4e7769efdfbdcf239bc82e9f49.jpg",
      "publishedAt": "20221110T09:22:19.4996804Z",
      "content": "With inflation at 8% and poor approval ratings for the Democratic president, Republicans were hoping to make big strides in retaking Congress. Why hasn't that happened?\r\nPollsters and pundits for wee… [+5683 chars]"
    },
    {
      "source": {
        "id": "bbcnews",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Ukraine war: Ukraine cautious over Russian withdrawal from key city",
      "description": "President Zelensky said Ukraine is moving \"very carefully\" after Russia announced a withdrawal from Kherson.",
      "url": "http://www.bbc.co.uk/news/live/world63576212",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BB69/production/_127577974_7ed0fa28c4b3ff4e7769efdfbdcf239bc82e9f49.jpg",
      "publishedAt": "20221110T07:52:25.2051736Z",
      "content": "The most senior US general estimates that around 100,000 Russian and 100,000 Ukrainian soldiers have been killed or injured in the war in Ukraine.\r\nMark Milley, chairman of the US Joint Chiefs of Sta… [+733 chars]"
    },
    {
      "source": {
        "id": "bbcnews",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Ukraine war: US estimates 200,000 military casualties on all sides",
      "description": "Gen Mark Milley, the head of the US military, also says around 40,000 civilians have died in the war.",
      "url": "http://www.bbc.co.uk/news/worldeurope63580372",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BB69/production/_127577974_7ed0fa28c4b3ff4e7769efdfbdcf239bc82e9f49.jpg",
      "publishedAt": "20221110T06:07:22.7183601Z",
      "content": "The most senior US general estimates that around 100,000 Russian and 100,000 Ukrainian soldiers have been killed or injured in the war in Ukraine.\r\nGen Mark Milley, chairman of the US Joint Chiefs of… [+2557 chars]"
    },
    {
      "source": {
        "id": "bbcnews",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Deli meat linked to deadly listeria outbreak in US",
      "description": "One person dies in Maryland and another miscarries because of the foodborne illness.",
      "url": "http://www.bbc.co.uk/news/worlduscanada63579440",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BB69/production/_127577974_7ed0fa28c4b3ff4e7769efdfbdcf239bc82e9f49.jpg",
      "publishedAt": "20221110T02:37:16.4213583Z",
      "content": "A listeria outbreak has hit six US states, infecting 16 people and killing one of them, health officials warn.\r\nAt least 13 people have been admitted to hospital. One patient died in Maryland. Anothe… [+763 chars]"
    },
    {
      "source": {
        "id": "bbcnews",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Diana Toebbe: Harsher sentence for wife of spy convicted in US",
      "description": "A judge says Diana Toebbe probably \"drove\" a plot which saw her husband seek to sell nuclear secrets.",
      "url": "http://www.bbc.co.uk/news/worlduscanada63578924",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BB69/production/_127577974_7ed0fa28c4b3ff4e7769efdfbdcf239bc82e9f49.jpg",
      "publishedAt": "20221110T01:37:22.5897519Z",
      "content": "A former US Navy engineer and his wife have been jailed in West Virginia for trying to sell military secrets to an unspecified foreign country. \r\nJonathan Toebbe, 42, had worked in the office of the … [+1777 chars]"
    },
    {
      "source": {
        "id": "bbcnews",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Hurricane Nicole: Florida braces for unusual November storm",
      "description": "Nicole would be the first hurricane to make landfall in the US this late in the season in 40 years.",
      "url": "http://www.bbc.co.uk/news/worlduscanada63579439",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BB69/production/_127577974_7ed0fa28c4b3ff4e7769efdfbdcf239bc82e9f49.jpg",
      "publishedAt": "20221110T00:52:22.8112435Z",
      "content": "Florida is bracing for a rare November hurricane as Nicole churns off the state's Atlantic Coast.\r\nThe huge category one hurricane has lashed Grand Bahama Island and is forecast to hit Florida overni… [+1910 chars]"
    },
    {
      "source": {
        "id": "bbcnews",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Brittney Griner: Jailed US basketball star moved to Russian penal colony",
      "description": "While the use of cannabis is illegal in Russia, Moscow has been accused of using the WNBA star \"as a political pawn\".",
      "url": "http://www.bbc.co.uk/news/worlduscanada63570787",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BB69/production/_127577974_7ed0fa28c4b3ff4e7769efdfbdcf239bc82e9f49.jpg",
      "publishedAt": "20221109T14:52:19.6765354Z",
      "content": "Jailed US basketball star Brittney Griner is being moved from a Russian prison to a penal colony.\r\nShe was arrested at an airport near Moscow in February when cannabis oil vapes were found in her bag… [+3616 chars]"
    }
  ]

  constructor(){
    super();
    this.state = {
      article: this.articles,
      loading: false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7b325af301e041f0be761e13a412ad0d";
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({article: parseData.articles})
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>News App - Top Headlines</h2>
        <div className="row" >
          {this.state.article.map((element) => {
            return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} url={element.url}/>
                   </div>
          })}
        </div>
      </div>
    )
  }
}

export default News
