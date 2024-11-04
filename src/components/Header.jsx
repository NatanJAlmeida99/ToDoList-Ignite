import { PlusCircle } from 'phosphor-react'
import logo from '../assets/Logo.svg'
import styles from '../components/Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo}alt="" />

            <form className={styles.newTaskForm}>
                <input placeholder='Adicione uma nova tarefa' />
                <button>Criar <PlusCircle size={20}/></button>
            </form>
        </header>
    )
}