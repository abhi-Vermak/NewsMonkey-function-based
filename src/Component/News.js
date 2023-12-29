import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "6",
    category: "general",
  };

  // static propTypes ={
  //   country: this.propTypes.string,
  //   pageSize: this.propTypes.number,
  //   category: this.propTypes.string,
  // }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }

  capitalFirstLetter = (string) => {
    let firstLetter = string.charAt(0).toUpperCase();
    return firstLetter + string.slice(1, string.length);
  };

  async updateNews() {
    this.props.setProgress(10);
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      page:2
    });
    this.props.setProgress(100);
  }
  
  async componentDidMount() {
     await this.updateNews();
  }

  fetchMoreData = async()=>{
    await this.setState ({
      page :this.state.page+1,
    })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      // loading: false,
    });
  }


  
  
  render() {
    return (
      <>
       
          <h1 className="text-center my-4">
            NewsMonkey - Top {this.capitalFirstLetter(this.props.category)}{" "}
            Headlines
          </h1>
          {this.state.loading? <Spinner/>:""}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length < this.state.page*this.props.pageSize}
            loader={<Spinner/>}
            >
            <div className="container">

            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      darkMode={this.props.darkMode}
                      key={element.url}
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                        ? element.description.slice(0, 88)
                        : ""
                      }
                      imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        publishedAt={element.publishedAt}
                        source={element.source.name}
                        />
                  </div>
                );
              })}
              </div>
            </div>
          </InfiniteScroll>
        {/* </div> */}
      </>
    );
  }
}

export default News;
