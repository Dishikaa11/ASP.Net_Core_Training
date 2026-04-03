import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Home = () => {
  const { text } = useContext(LanguageContext);

  return (
    <div className="container">
      <div className="card">
        <h1>{text.title}</h1>
        <p>{text.description}</p>
      </div>
    </div>
  );
};

export default Home;