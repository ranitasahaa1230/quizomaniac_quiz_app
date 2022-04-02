import { MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./Category.css"
import { useNavigate} from 'react-router-dom'
import {Error} from "../index";
import { useQuiz } from "../contexts/quizContext";
import { useTheme } from "../contexts/themeContext";

export const Category = ({names,setNames,fetchQuestions}) => {
  const { theme } = useTheme();
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
          onChange={(e) => setNames(e.target.value)} className={`${theme ? "Mui-dark" : ""}`}/>
        <TextField
          select
          label="Select Difficulty"
          variant="outlined"
          className={`${theme ? "Mui-dark" : ""}`}
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
        <MenuItem key="Easy" value="easy" selected className="MenuItem">Easy</MenuItem>
        <MenuItem key="Medium" value="medium" selected className="MenuItem">Medium</MenuItem>
        <MenuItem key="Hard" value="hard"selected className="MenuItem">Hard</MenuItem>
        </TextField>
                <button className="explore-btn btns-explore" onClick={handleSubmit}>Start Quiz</button>
     </div>
    </div>
    </div>
  );
};
