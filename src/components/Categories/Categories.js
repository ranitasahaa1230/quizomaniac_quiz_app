import React from "react";
import { data } from "../../assets/images/data";
import "./Categories.css";
import { Link } from "react-router-dom";
import { useQuiz } from "../contexts/quizContext";
import { getSearchedProducts } from "../reducers/search";

export const Categories = () => {
  const {setCategory,quizState:{searchQuery}}=useQuiz();
  const getCategories=(getSearchedProducts(data,searchQuery))

  return (
    <div className="sections">
      <main className="main-quiz" id="main-quiz">
      <h2 className="categories">Categories</h2>
      <div className="card__flex">
        {getCategories.length ? getCategories.map(({id,img,alt,categoryName,description,category}) => (
          <div className="card" key={id}>
            <img src={img} alt={alt} className="card__img" />
            <h3>{categoryName}</h3>
            <div className="desc">{description}</div>
            <div className="card__desc">
              <div className="desc__span">10 Questions</div>
              <Link to="/details">
                <button className="text" onClick={()=>setCategory(category)}>TAKE QUIZ</button>
              </Link>
            </div>
          </div>
        )) : (<div className="text__quiz">No quizzes found.Try after some time...</div>)}
      </div>
    </main>
    </div>
  );
};
