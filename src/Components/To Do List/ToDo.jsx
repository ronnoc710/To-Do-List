import React, {useState} from "react";
import './ToDo.css';
import TaskList from '../Task List/Task List.jsx';
import NewTask from '../New Task/Header.jsx';

export default function ToDo () {
    const [newTask, setNewTask] = useState();
    const [TaskList, setTaskList] = useState();

    return (
        <div>
            <NewTask />
        </div>
    )
}