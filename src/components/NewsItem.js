import React, { Component } from "react";
// import NewsItem from './NewsItem'
export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;

    return (
      <div className="my-3">
        {/* This is a newsItem2 !! */}

        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: " 0",
            }}
          ></div>

          <div>
            {/* <span className="badge rounded-pill bg-danger"></span> */}
            <span class="badge rounded-pill bg-danger">{source}</span>{" "}
          </div>

          <img
            src={
              !imageUrl
                ? "https://4.bp.blogspot.com/-KHWOBdAENUU/UXOX84Wt-YI/AAAAAAAAAAw/u-Lzp-qwIC8/s1600/tv9+logo.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-danger">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
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
