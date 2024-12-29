import {useState} from "react";

export const useTaskList = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        if (task.trim() !== "") {
            setTasks((prev) => [...prev, {task, completed: false}]);
        }
    };

    const toggleTaskCompletion = (index) => {
        setTasks((prev) =>
            prev.map((task, i) =>
                i === index ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return {tasks, addTask, toggleTaskCompletion}
}