import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home, Category, RulesPage, Quiz, Login, SignUp } from "./components";
import axios from "axios";
import { useState } from "react";

function App() {
  const [names, setNames] = useState("");
  const [questions, setQuestions] = useState("");
  const [scores, setScores] = useState(0);

  const fetchQuestions = async (categories = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        categories && `&category=${categories}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/category"
          element={
            <Category
              names={names}
              setNames={setNames}
              fetchQuestions={fetchQuestions}
            />
          }
        />
        <Route path="/rulespage" element={<RulesPage />} />
        <Route
          path="/quiz"
          element={
            <Quiz
              names={names}
              setNames={setNames}
              scores={scores}
              setScores={setScores}
              questions={questions}
              setQuestions={setQuestions}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
