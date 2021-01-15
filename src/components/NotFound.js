import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h4>Error 404! not found</h4>
      <Link to="/" className="c-btn">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
