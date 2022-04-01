import { MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./Category.css"
import { useNavigate} from 'react-router-dom'
import {Error} from "../index";
import { useQuiz } from "../contexts/quizContext";

export const Category = ({names,setNames,fetchQuestions}) => {

    const [difficulty,setDifficulty]=useState('');
    const [error,setError]=useState(false);
    const navigate = useNavigate();
    const { category} = useQuiz();


    const handleSubmit=()=>{
        if(!difficulty || !names){
            setError(true)
        }
        else{
            setError(false)
            fetchQuestions(category,difficulty);
            navigate("/rulespage")
        }
    }
    
  return (
     <div className="setting__cat">
     <div className="settingss">
     <div className="settings__select">
      {error && <Error/>}
        <TextField label="Enter Your Name" variant="outlined" value={names}
          onChange={(e) => setNames(e.target.value)}/>
        <TextField
          select
          label="Select Difficulty"
          variant="outlined"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
        <MenuItem key="Easy" value="easy">Easy</MenuItem>
        <MenuItem key="Medium" value="medium">Medium</MenuItem>
        <MenuItem key="Hard" value="hard">Hard</MenuItem>
        </TextField>
                <button className="explore-btn btns-explore" onClick={handleSubmit}>Start Quiz</button>
     </div>
    </div>
    </div>
  );
};
