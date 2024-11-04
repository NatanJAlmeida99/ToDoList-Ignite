import { PlusCircle } from 'phosphor-react';
import logo from '../assets/Logo.svg';
import styles from '../components/Header.module.css';
import { useState } from 'react';

export function Header({ onAddTask }) {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim()) {
            onAddTask(newTask);
            setNewTask('');
        }
    };

    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo" />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input 
                    placeholder='Adicione uma nova tarefa' 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)} 
                />
                <button type="submit">Criar <PlusCircle size={20}/></button>
            </form>
        </header>
    );
}
