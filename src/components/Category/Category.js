import { MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Categories from "../../assets/images/data";
import "./Category.css"
import { useNavigate} from 'react-router-dom'
import {Error} from "../index";

export const Category = ({names,setNames,fetchQuestions}) => {
    const [category,setCategory]=useState('');
    const [difficulty,setDifficulty]=useState('');
    const [error,setError]=useState(false);
    const navigate = useNavigate();

    const handleSubmit=()=>{
        if(!names || !category || !difficulty){
            setError(true)
        }
        else{
            setError(false)
            fetchQuestions(category,difficulty);
            navigate("/quiz")
        }
    }
    
  return (
    <div className="settings">
      <div className="settings__select">
      {error && <Error/>}
        <TextField label="Enter Your Name" variant="outlined" value={names}
          onChange={(e) => setNames(e.target.value)}/>
        <TextField
          select
          label="Select Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          variant="outlined"
        >
          {Categories.map((type) => (
            <MenuItem key={type.category} value={type.value}>
              {type.category}
            </MenuItem>
          ))}
        </TextField>
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
  );
};
