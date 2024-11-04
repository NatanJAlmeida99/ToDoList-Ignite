import { useState } from "react";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Estudar React', completed: false },
        { id: 2, text: 'Fazer exercícios', completed: true },
        // Adicione mais tarefas aqui se quiser
    ]);

    const addTask = (newTaskText) => {
        const newTask = {
            id: tasks.length + 1, // Gera um ID único
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
