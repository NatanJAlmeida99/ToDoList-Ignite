import { useState } from "react";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

function App() {
    const [tasks, setTasks] = useState([
        
    ]);

    const addTask = (newTaskText) => {
        const newTask = {
            id: tasks.length + 1, 
            text: newTaskText,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const toggleComplete = (taskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <>
            <Header onAddTask={addTask} />
            <Task tasks={tasks} onDelete={deleteTask} onToggleComplete={toggleComplete} />
        </>
    );
}

export default App;
