import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QuizProvider } from "./components/contexts/quizContext";

ReactDOM.render(
  <>
    <BrowserRouter>
      <QuizProvider>
        <App />
      </QuizProvider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
