import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import "./Questions.css";

export const Questions = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScores,
  scores,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (option) => {
    if (selected === option && selected === correct) return "select";
    else if (selected === option && selected !== correct) return "wrong";
    else if (option === correct) return "select";
  };

  const handleCheck = (option) => {
    setSelected(option);
    if (option === correct) setScores(scores + 10);
    setError(false);
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  const handleNext = () => {
    if (currQues > 8) navigate("/results");
    else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else {
      setError("Please select an option first");
    }
  };

  return (
    <div className="question_section">
      <div className="question">
      <div className="singleQuestion">
        <div className="questionss">{questions[currQues].question}</div>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues > 8 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
};
