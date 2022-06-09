import React from "react";
import "./Task List.css"

export default function TaskList (props) {

    return(
        <div>
            <ol>{props.mapTaskList}</ol>
        </div>
    )
}