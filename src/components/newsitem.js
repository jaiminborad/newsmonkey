import React from "react";

export default function NewsItem(props) {
  return (
    <div className="my-3">
      <div className="card" style={{ width: "20rem" }}>
        <img src={props.imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!props.author ? "Unknown" : props.author} on{" "}
              {new Date(props.date).toGMTString()}
            </small>
          </p>
          <a href={props.link} className="btn btn-sm btn-success">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
