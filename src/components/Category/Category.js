import { MenuItem, TextField } from "@material-ui/core";
import React from "react";
import Categories from "../Categories/data";
import "./Category.css"

export const Category = () => {
  return (
    <div className="settings">
      <div className="settings__select">
        <TextField label="Enter Your Name" variant="outlined" />
        <TextField
          select
          label="Select Category"
          // value={category}
          // onChange={(e) => setCategory(e.target.value)}
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
        >
        <MenuItem key="Easy" value="easy">Easy</MenuItem>
        <MenuItem key="Medium" value="medium">Medium</MenuItem>
        <MenuItem key="Hard" value="hard">Hard</MenuItem>
        </TextField>
      </div>
    </div>
  );
};
