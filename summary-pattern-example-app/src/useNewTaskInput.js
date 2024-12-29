import {useState} from "react";

export const useNewTaskInput = (addTask) => {
    const [newTask, setNewTask] = useState("");

    const handleNewTaskChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(newTask);
        setNewTask("");
    }

    return {newTask, handleNewTaskChange, handleSubmit};
}