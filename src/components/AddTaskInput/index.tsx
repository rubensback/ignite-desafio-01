import React, { FormEvent, useState } from 'react'
import styles from './AddTaskInput.module.css'

interface AddTaskInputProps {
  addNewTask: (description: string) => void
}

export const AddTaskInput: React.FC<AddTaskInputProps> = ({ addNewTask }) => {
  const [task, setTask] = useState<string>('')

  const onCreateTask = (event: FormEvent<HTMLFormElement>) => {
    if (task) {
      event.preventDefault()
      addNewTask(task)
      setTask('')
    }
  }

  return (
    <form className={styles.container} onSubmit={onCreateTask}>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.addButton} disabled={!task} type="submit">
        Criar
      </button>
    </form>
  )
}
