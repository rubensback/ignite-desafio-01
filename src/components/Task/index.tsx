import React from 'react'
import styles from './Task.module.css'
import checkImg from '../../assets/check.svg'
import uncheckImg from '../../assets/uncheck.svg'
import trashImg from '../../assets/trash.svg'

interface TaskObj {
  id: string
  description: string
  isComplete: boolean
}

interface TaskProps {
  task: TaskObj
  markTask: (id: string) => void
  deleteTask: (id: string) => void
}

export const Task: React.FC<TaskProps> = ({ task, markTask, deleteTask }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.checkbox}
        src={task.isComplete ? checkImg : uncheckImg}
        alt="complete"
        onClick={() => markTask(task.id)}
      />
      <p>{task.description}</p>
      <img
        className={styles.deleteButton}
        src={trashImg}
        alt="delete"
        onClick={() => deleteTask(task.id)}
      />
    </div>
  )
}
