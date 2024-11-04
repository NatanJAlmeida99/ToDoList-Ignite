import { Trash } from 'phosphor-react';
import styles from './VoidTask.module.css';

export function VoidTask({ task, onDelete, onToggleComplete }) {
    return (
        <div className={styles.voidTask}>
            <button 
                className={styles.check} 
                onClick={() => onToggleComplete(task.id)}
            >
                <div className={task.completed ? styles.checked : ''}></div>
            </button>

            <p className={task.completed ? styles.completed : ''}>{task.text}</p>

            <button className={styles.trash} onClick={() => onDelete(task.id)}>
                <Trash size={20}/>
            </button>
        </div>
    );
}
