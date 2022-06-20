import React from "react";
import "./Controls.css"

export default function Controls(props) {

    return(
      <button 
        type="button" 
        className="btn toggle-btn" 
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.name)}
      >
        <span className="visually-hidden">Show </span>
        <span>{props.name}</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    );
}