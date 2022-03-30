import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { CircularProgress } from "@material-ui/core";
import { Questions } from "../Questions/Questions";

export const Quiz = ({ names, scores, setScores, questions,setQuestions}) => {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
  
    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
      };
  
   useEffect(() => {
      setOptions(
        questions &&
          handleShuffle([
            questions[currQues]?.correct_answer,
            ...questions[currQues]?.incorrect_answers
          ])
      );
    }, [currQues, questions]);
  

  return (
    <div className="quiz__page">
      <div className="quiz__name">Welcome, {names}</div>
      {questions ? (
        <>
        <div className="question__flex">
          <h1 className="question__bold">{questions[currQues].category}</h1>
         <h1 className="question__bold"> SCORE : {scores}</h1>
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
