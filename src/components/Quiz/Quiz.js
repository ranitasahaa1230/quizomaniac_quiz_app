import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { CircularProgress } from "@material-ui/core";

export const Quiz = ({ names, scores, setScores, questions, setQuestions }) => {
  const [options, setOptions] = useState("");
  const [currQues, setCurrQues] = useState(0);

//   useEffect(() => {
//     setQuestions(
//       questions &&
//         handleShuffle([
//           questions[currQues]?.correct_answer,
//           ...questions[currQues]?.incorrect_answers,
//         ])
//     );
//   }, [currQues, questions]);

//   console.log(questions);
//   const handleShuffle = (option) => {
//     return option.sort(() => Math.random() - 0.5);
//   };

  return (
    <div className="quiz__page">
      <div className="quiz__name">Welcome, {names}</div>
      {questions ? (
        <>
          <div className="quiz__info">
            <span> {questions[currQues].categories}</span>
            <span>Score: {scores}</span>
          </div>
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
