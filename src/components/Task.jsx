import styles from './Task.module.css'
import { VoidTask } from './VoidTask'

export function Task() {
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>10</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Concluídas</p>
                    <span>2 de 10</span>
                </div>
            </header>

            <div className={styles.list}> 
                <VoidTask />
                <VoidTask />
            </div>
        </section>
    )
}