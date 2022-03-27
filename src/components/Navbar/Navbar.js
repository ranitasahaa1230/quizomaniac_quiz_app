import React from "react";
import { Link } from 'react-router-dom'
import "./Navbar.css"
import favicon from "../../assets/images/favicon.png"

export const Navbar = () => {
  return (
    <div>
      <header>
        <div id="menu-bar" className="fas fa-bars menu-bar"></div>
        <div className="logo-header">
          <img src={favicon} alt="logo" className="logo-design" />
          <Link to="/" className="logo">
            Quizomaniac
          </Link>
        </div>

        <nav className="navbar">
          <Link to="/" className="href">
            <i className="fas fa-home social-quizicons"></i>Home
          </Link>
          <Link to="./pages/scoreboard.html" className="href">
            <i className="fas fa-chart-line social-quizicons"></i>Dashboard
          </Link>
        </nav>

        <form action="" className="class-form">
          <input
            type="search"
            id="search-bar"
            className="search-input"
            placeholder="Search for your favorite quizzes..."
          />
          <label htmlFor="search-bar" className="fas fa-search search-label"></label>
        </form>

        <div className="font-icons">
          <Link
            to="./pages/login.html"
            className="fa-solid fa-right-to-bracket social-quizicons"
          ></Link>
          <Link
            to="./pages/profile.html"
            className="fas fa-user social-quizicons"
          ></Link>
        </div>
      </header>
    </div>
  );
};
