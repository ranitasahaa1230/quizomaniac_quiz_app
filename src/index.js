import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QuizProvider } from "./components/contexts/quizContext";
import { ThemeProvider } from "./components/contexts/themeContext";

ReactDOM.render(
  <>
    <BrowserRouter>
    <ThemeProvider>
      <QuizProvider>
        <App />
      </QuizProvider>
      </ThemeProvider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
