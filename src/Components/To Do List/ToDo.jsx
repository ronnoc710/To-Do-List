import React, {useState} from "react";
import './ToDo.css';
import TaskList from '../Task List/Task List.jsx';
import NewTask from '../New Task/Header.jsx';

export default function ToDo () {
    const [newTask, setNewTask] = useState();
    const [taskList, setTaskList] = useState([]);


    const handleSubmit = (event) {
        
    }

    const mapTaskList = taskList.map(taskList.id,task) {
        return (
            <li>{task}</li>
        )
    }
    return (
        <div>
            <NewTask />
            <TaskList />
        </div>
    )
}