import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      darkMode,
      author,
      publishedAt,
      source,
    } = this.props;
    return (
      <div className="container" style={{padding:"auto"}}>
        <div
          className="card my-3 mb-2"
          style={{
            width: "20rem",
            background: darkMode ? "#2f3d4b" : "white",
            color: darkMode ? "white" : "#2f3d4b",
            border: `2px solid ${darkMode ? "white" : "black"}`,
          }}
        >
          <img
            src={!imageUrl
                ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/breaking_latest_news_1200x675_1-sixteen_nine_555.jpg?VersionId=bLdr13QKJ5KRZO3IAQuURXh0gZUgtbou"
                : imageUrl}
            className="card-img-top"
            alt="pic failed to load"
          />
          <div className="card-body">
            <span
              className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
              style={{ zIndex: "1", left: "90%" }}
            >
              {source}
            </span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text" style={{fontSize:"17px"}}>{description}....</p>
            <p className="card-text">
              <small style={{ fontSize: "13px" }}>
                By {author} on {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
