import { useMemo, useState } from 'react'
import { AddTaskInput } from '../AddTaskInput'
import styles from './TaskManager.module.css'
import { v4 as uuidv4 } from 'uuid'
import clipboardImg from '../../assets/clipboard.svg'
import { Task } from '../Task'

interface TaskObj {
  id: string
  description: string
  isComplete: boolean
}

export const TaskManager = () => {
  const [list, setList] = useState<TaskObj[]>([])

  const addNewTask = (description: string) => {
    const newTask = {
      id: uuidv4(),
      description,
      isComplete: false,
    }
    setList((state) => [...state, newTask])
  }

  const markTask = (id: string) => {
    setList((state) =>
      state.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item,
      ),
    )
  }

  const deleteTask = (id: string) => {
    setList((state) => state.filter((item) => item.id !== id))
  }

  const completedTasks = useMemo(
    () =>
      list.reduce((acc, task) => {
        if (task.isComplete) return acc + 1
        return acc
      }, 0),
    [list],
  )

  return (
    <div className={styles.container}>
      <AddTaskInput addNewTask={addNewTask} />
      <header className={styles.header}>
        <p>
          Tarefas criadas <span>{list.length}</span>
        </p>
        <p className={styles.titlePurple}>
          Concluidas{' '}
          <span>
            {completedTasks} de {list.length}
          </span>
        </p>
      </header>
      <div className={styles.list}>
        {list.length ? (
          <div className={styles.listContainer}>
            {list.map((task) => (
              <Task
                key={task.id}
                task={task}
                markTask={markTask}
                deleteTask={deleteTask}
              ></Task>
            ))}
          </div>
        ) : (
          <div className={styles.emptyContainer}>
            <img src={clipboardImg} alt="empty list" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </div>
  )
}
