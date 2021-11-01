import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import ArticleBox from "./components/ArticleBox";
import Navbar from "./components/Navbar";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/articles")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(articles);
  const articlesList = articles.map((article) => (
    <ArticleBox key={article.id.toString()} article={article} />
  ));

  return (
    <div className="App">
      <Navbar />
      <div className="newsContainer">{articlesList}</div>
    </div>
  );
}

export default App;
