import React from 'react'
import "./Questions.css";

export const Questions = ({currQues,
    setCurrQues,
    questions,
    options,
    correct,
    setScores,
    scores,
    setQuestions,}) => {
  return (
    <div>
        <div className='question__num'>Question {currQues+1}</div>
    </div>
  )
}
