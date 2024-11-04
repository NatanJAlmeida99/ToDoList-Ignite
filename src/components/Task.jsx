import styles from './Task.module.css';
import { VoidTask } from './VoidTask';

export function Task({ tasks, onDelete, onToggleComplete }) {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{totalTasks}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Concluídas</p>
                    <span>{completedTasks} de {totalTasks}</span>
                </div>
            </header>

            <div className={styles.list}> 
                {tasks.map(task => (
                    <VoidTask 
                        key={task.id} 
                        task={task} 
                        onDelete={onDelete} 
                        onToggleComplete={onToggleComplete} 
                    />
                ))}
            </div>
        </section>
    );
}
