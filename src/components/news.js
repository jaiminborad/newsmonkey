import React, { useEffect, useState } from "react";
import NewsItem from "./newsitem";
import Spinner from "../components/spinner";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState();
  const [loading, setLoading] = useState(false);

  const fetchDetails = async () => {
    setLoading(true);
    const API_KEY = "a0c425200ce74ff4bc9e728d81dfe3a1";
    let url = `https://newsapi.org/v2/top-headlines?sources?category=${props.categorie}&country=${props.country}&apiKey=${API_KEY}&page=${page}&pageSize=${props.pageSize}`;

    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    setTotalArticles(data.totalResults);
    setArticles(data.articles);
  };

  const handleNextClick = () => {
    if (page > Math.ceil(totalArticles / props.pageSize)) {
    } else {
      setPage(page + 1);
      fetchDetails(page);
    }
  };

  const handlePrevClick = () => {
    setPage(page - 1);
    fetchDetails(page);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="container my-3">
      <h1 className="text-center">TV REPORT 18 - Top Headlines </h1>
      {loading && <Spinner />}
      <div className="row">
        {!loading &&
          articles.map((article) => (
            <div className="col-md-4">
              <NewsItem
                title={article.title}
                description={article.description}
                imgurl={article.urlToImage}
                link={article.url}
                author={article.author}
                date={article.publishedAt}
              />
            </div>
          ))}
        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-danger"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={page > Math.ceil(totalArticles / props.pageSize)}
            type="button"
            className="btn btn-success"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
