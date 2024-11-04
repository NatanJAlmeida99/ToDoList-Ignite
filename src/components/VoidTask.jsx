import { Trash } from 'phosphor-react'
import sytles from './VoidTask.module.css'

export function VoidTask() {
    return (
        <div className={sytles.voidTask}>
            <button className={sytles.check}>
                <div></div>
            </button>

            <p>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>

            <button className={sytles.trash}>
                <Trash size={20}/>
            </button>
        </div>
    )
}