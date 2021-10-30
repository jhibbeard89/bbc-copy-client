import React from "react";

const ArticleBox = (props) => {
  return (
    <div
      className="box"
      style={{
        background: `linear-gradient(0deg, rgba(24, 24, 24, 0.5), rgba(24, 24, 24, 0.5)), url(${props.imageLink})`,
        backgroundSize: "cover",
      }}
    >
      <h2>{props.title}</h2>
      <p>{props.subHeader}</p>
      <p className="tag">{props.tag}</p>
    </div>
  );
};

export default ArticleBox;
