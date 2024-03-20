import { TbTrash } from "react-icons/tb";
import styles from "./Tarefa.module.css";
import { Task } from "../interface"
import { BsFillCheckCircleFill } from "react-icons/bs";

interface TaskProps{
  task: Task;
  onCompleted: (taskId: string) => void;
  onDelete: (taskId: string) => void;
  isDeleting: boolean;
}

export function Tarefa({ task, onCompleted, onDelete, isDeleting }: TaskProps){

  const handleCompleted = () => {
    onCompleted(task.id)
  }

  const handleDelete = () => {
    if (!isDeleting){
      onDelete(task.id)
    }
  }

  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={handleCompleted}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div title="Selecionar"/>}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>

      <button className={styles.deleteButton} onClick={handleDelete}>
        <TbTrash size={20} title="Deletar"/>
      </button>
    </div>
  )
}