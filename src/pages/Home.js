import React, {useState,useEffect} from "react";
import axios from "axios";
import ArticleBox from "../components/ArticleBox";

const Home = () => {
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
 return(
   <div className="newsContainer">{articlesList}</div>
 )
}


export default Home;
