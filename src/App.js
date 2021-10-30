import React from "react";
import "./App.css";
import ArticleBox from "./components/ArticleBox";

function App() {
  const title = "Climate and Covid top agenda as world leaders meet";
  const subHeader =
    "The G20 leaders are holding tehri first face-to-face meeting since the start of the pandemic";
  const link =
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/13CA1/production/_121275018_996a9b7e-6a23-4ff6-be7f-79db818e8600.jpg";
  const tag = "WORLD";

  return (
    <div className="App">
      <ArticleBox
        title={title}
        subHeader={subHeader}
        imageLink={link}
        tag={tag}
      />
    </div>
  );
}

export default App;
