import React from "react";
import { Link } from "react-router-dom";
import "./RulesPage.css";
import rules from "../../assets/images/rules.jpg";

export const RulesPage = () => {
  return (
    <div class="rules__page">
      <div className="rules__images">
        <img src={rules} className="rules__image" alt="rules" />
      </div>
      <div class="rules__section">
        <h2 class="rules">Rules To Follow!</h2>
        <ul class="list__rules">
          <li>
            <i class="fas fa-star star star__1"></i> This Quiz consists of 10
            questions in each category
          </li>
          <li>
            <i class="fas fa-star star star__2"></i> Each right answer scores 10
            Points
          </li>
          <li>
            <i class="fas fa-star star star__3"></i> Each multiple choice
            question has only one correct answer
          </li>
          <li>
            <i class="fas fa-star star star__4"></i> To win the quiz you need to
            score more than 70%
          </li>
          <li>
            <i class="fas fa-star star star__5"></i>Don't plagarize. Try to
            answer on your own
          </li>
          <div class="text__btn">
            <Link to="/quiz">
              <button class="text">START QUIZ</button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};
