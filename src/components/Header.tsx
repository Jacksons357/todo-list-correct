import styles from "./Header.module.css"
import logo from "../assets/logo.svg"
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";

interface HeaderProps{
  onAddTask: (title: string) => void;
}

export function Header({ onAddTask }: HeaderProps){

  const [title, setTitle] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    onAddTask(title);
    setTitle("")
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    setTitle(event.target.value);
  }

  return (
    <>
    <header className={styles.header}>

      <img src={logo} alt="logo todolist"/>
      <p>to<span className={styles.do}>do</span></p>

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>

      <input 
        placeholder="Digite uma tarefa" 
        type="text" 
        value={title} 
        onChange={handleChange}/>

      <button>
        Adicionar 
        <AiOutlinePlusCircle />
      </button>
      
      </form>
    </header>
    </>
  )
}