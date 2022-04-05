import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import error from "../../assets/images/error.jpg"

export const NotFound = () => {
  return (
    <div className="not__found">
        <img src={error} alt='error'/>
      Oops!! You have entered a wrong URL.😕{" "}
      <Link to="/" className="span__not">
        {" "}
        Go Back!
      </Link>
    </div>
  );
};
