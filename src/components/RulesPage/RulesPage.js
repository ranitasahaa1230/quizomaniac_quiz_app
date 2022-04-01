import React from "react";
import { Link } from "react-router-dom";
import "./RulesPage.css";
import rules from "../../assets/images/rules.jpg";

export const RulesPage = () => {
  return (
    <div className="rules_section">
      <div className="rules__page">
      <div className="rules__images">
        <img src={rules} className="rules__image" alt="rules" />
      </div>
      <div className="rules__section">
        <h2 className="rules">Rules To Follow!</h2>
        <ul className="list__rules">
          <li>
            <i className="fas fa-star star star__1"></i> This Quiz consists of 10
            questions in each category
          </li>
          <li>
            <i className="fas fa-star star star__2"></i> Each right answer scores 10
            Points
          </li>
          <li>
            <i className="fas fa-star star star__3"></i> Each multiple choice
            question has only one correct answer
          </li>
          <li>
            <i className="fas fa-star star star__4"></i> To win the quiz you need to
            score more than 70%
          </li>
          <li>
            <i className="fas fa-star star star__5"></i>Don't plagarize. Try to
            answer on your own
          </li>
          <div className="text__btn">
            <Link to="/quiz">
              <button className="text">START QUIZ</button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
    </div>
  );
};
