import React from "react";
import "./Header.css";

export default function NewTask(props) {
    
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label for="task"> Task:</label>
                <input 
                  type="text"
                  id="task"
                  name="task"
                  onchange={props.handleChange}
                />
            </form>
        </div>
    )
}