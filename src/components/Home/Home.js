import React from "react";
import "./Home.css"
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.jpg"
import { Categories, Footer } from "../index";

export const Home = () => {
  return (
    <div>
      <section>
        <div class="section-bar">
          <div>
            <h2>Welcome to Quizomaniac Quiz</h2>
            <div class="quiz-section">
              Bored? Want to have fun?
              <br />
              Participate in the quizzes handpicked for you
              <br />
              <Link to="">
                <button class="explore-btn">Explore Quizzes</button>
              </Link>
            </div>
          </div>
          <div>
            <img
              class="quiz-image"
              src={logo}
              alt="quiz-image"
            />
          </div>
        </div>
      </section>
      <Categories/>
      <Footer />
    </div>
  );
};
