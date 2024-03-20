import { Tarefa } from "./Tarefa";
import styles from "./Tarefas.module.css";
import { Task } from "../interface";
import { useState } from "react";

interface TasksProps{
  tasks: Task[];
  onCompleted: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function Tarefas({ tasks, onCompleted, onDelete }: TasksProps){

  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  function handleDelete(taskId: string){
    setIsDeleting(taskId);
    onDelete(taskId);
  }

  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;
  
  return(
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Concluidas</p>
          <span>{completedTasks} de {tasksQuantity}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map(task => (
          <Tarefa 
            key={task.id} 
            task={task} 
            onCompleted={onCompleted}
            onDelete={handleDelete}
            isDeleting={task.id === isDeleting}
           />
        ))}
      </div>
    </section>
  )
}