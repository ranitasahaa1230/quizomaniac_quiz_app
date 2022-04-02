import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="not__found">
      Oops!! You have entered a wrong URL.😕{" "}
      <Link to="/" className="span__not">
        {" "}
        Go Back!
      </Link>
    </div>
  );
};
