import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { CircularProgress } from "@material-ui/core";
import { Questions } from "../Questions/Questions";

export const Quiz = ({ names, scores, setScores, questions, setQuestions }) => {
  const [options, setOptions] = useState("");
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues,questions]);

  console.log(options);
  const handleShuffle = (option) => {
    return option.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz__page">
      <div className="quiz__name">Welcome, {names}</div>
      {questions ? (
        <>
        <div class="question__flex">
          <h4><span class="question__bold">{questions[currQues].category}</span></h4>
          <h3>SCORE : <span class="question__bold">{scores}</span></h3>
        </div>
          <Questions 
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            scores={scores}
            setScores={setScores}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};
