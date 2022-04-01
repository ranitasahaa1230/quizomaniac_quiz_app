import { Button } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Results.css";

export const Results = ({scores, names}) => {
    const navigate = useNavigate();

  useEffect(() => {
    if (!names) {
        navigate("/");
    }
  }, [names,navigate]);

  return (
    <div className="result">
        <h1>Final Score : {scores}/100</h1>
        <div>
          <h5>Questions you answered correctly:</h5>
        </div>
        <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  )
}
