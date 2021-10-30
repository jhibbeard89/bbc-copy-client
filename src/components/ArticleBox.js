import React from "react";

const ArticleBox = ({ article }) => {
  return (
    <div
      className="box"
      style={{
        background: `linear-gradient(0deg, rgba(24, 24, 24, 0.5), rgba(24, 24, 24, 0.5)), url(${article.image_url})`,
        backgroundSize: "cover",
      }}
    >
      <h2>{article.title}</h2>
      <p>{article.subHeader}</p>
      <p className="tag">World</p>
    </div>
  );
};

export default ArticleBox;
