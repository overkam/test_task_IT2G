import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./Description.css";

function Description({ description }) {
  return (
    <div className='description'>
      <h1>Description task</h1>
      <p>{description}</p>
      <button>
        <NavLink to="/" className='description-link'>
          <Button size="large" color="primary" >Go back</Button>
        </NavLink>
      </button>
    </div>
  );
}

Description.propTypes = {
  description: PropTypes.string,
};

export default Description;
