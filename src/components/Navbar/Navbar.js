import React from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import "./Navbar.css";
import favicon from "../../assets/images/favicon.png";
import { useTheme } from "../contexts/themeContext";
import { useQuiz } from "../contexts/quizContext";

export const Navbar = () => {
  const { theme, updateTheme } = useTheme();
  const { pathname } = useLocation();
  const {quizDispatch}=useQuiz();

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
          <NavLink to="/" className="href">
            <i className="fas fa-home social-quizicons"></i>Home
          </NavLink>
          <NavLink to="/dashboard" className="href">
            <i className="fas fa-chart-line social-quizicons"></i>Dashboard
          </NavLink>
        </nav>

        {pathname === "/" ? (
          <form action="" className="class-form">
            <input
              type="search"
              id="search-bar"
              className="search-input"
              placeholder="Search for your favorite quizzes..."
              onChange={(e) =>
                quizDispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value })
              }
            />
            <label
              htmlFor="search-bar"
              className="fas fa-search search-label"
            ></label>
          </form>
        ) : (
          ""
        )}

        <div className="font-icons">
          <span onClick={() => updateTheme()}>
            <span>
              {theme ? (
                <i className="fa-solid fa-sun social-quizcons"></i>
              ) : (
                <i className="fa-solid fa-moon social-quizcons"></i>
              )}
            </span>
          </span>
          <NavLink
            to="./login"
            className="fa-solid fa-right-to-bracket social-quizicons"
          ></NavLink>
          <NavLink to="/signup" className="fas fa-user social-quizicons"></NavLink>
        </div>
      </header>
    </div>
  );
};
