import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  Home,
  Category,
  RulesPage,
  Quiz,
  Login,
  SignUp,
  Results,
  NotFound,
} from "./components";
import axios from "axios";
import { useState } from "react";
import { useTheme } from "./components/contexts/themeContext";

function App() {
  const { theme } = useTheme();
  const [names, setNames] = useState("");
  const [questions, setQuestions] = useState("");
  const [scores, setScores] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <div className={`${theme ? "background__dark" : "background__light"}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/details"
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
              scores={scores}
              setScores={setScores}
              questions={questions}
            />
          }
        />
        <Route
          path="/results"
          element={<Results names={names} scores={scores} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
