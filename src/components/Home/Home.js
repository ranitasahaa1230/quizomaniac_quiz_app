import React from "react";
import "./Home.css"
import logo from "../../assets/images/logo.jpg"
import { Categories, Footer } from "../index";

export const Home = () => {
  return (
    <div className="sections">
        <div className="section-bar">
          <div>
            <h2>Welcome to Quizomaniac Quiz</h2>
            <div className="quiz-section">
              Bored? Want to have fun?
              <br />
              Participate in the quizzes handpicked for you
              <br />
              <a href="#main-quiz">
                <button className="explore-btn">Explore Quizzes</button>
              </a>
            </div>
          </div>
          <div>
            <img
              className="quiz-image"
              src={logo}
              alt="quiz"
            />
          </div>
        </div>
      <Categories/>
      <Footer />
    </div>
  );
};
