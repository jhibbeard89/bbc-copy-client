import React, { useEffect, useState } from "react";
import "./App.css";
import ArticleBox from "./components/ArticleBox";

function App() {
  const [articles, setArticles] = useState();

  // const [title, setTitle] = useState(
  //   "Climate and Covid top agenda as world leaders meet"
  // );

  // const [subHeader, setSubHeader] = useState(
  //   "The G20 leaders are holding tehri first face-to-face meeting since the start of the pandemic"
  // );

  // const [imageLink, setImageLink] = useState(
  //   "https://ichef.bbci.co.uk/news/976/cpsprodpb/13CA1/production/_121275018_996a9b7e-6a23-4ff6-be7f-79db818e8600.jpg"
  // );

  // const [tag, setTag] = useState("WORLD");

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  // console.log(articles);
  articles.map((article) => console.log(article.title));

  return (
    <div className="App">
      {articles.map((article) => (
        <ArticleBox
          title={article.title}
          subHeader={article.subTitle}
          imageLink={article.imageLink}
          tag="WORLD"
        />
      ))}
    </div>
  );
}

export default App;
