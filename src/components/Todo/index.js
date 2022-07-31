import React from "react";
import { useTodo } from "../../hooks";
import TodoItem from "./TodoItem/index";
import TodoForm from "./TodoForm/index";
import styles from "./Todo.module.scss";
import TodoHeader from "./TodoHeader/index";

const Todo = () => {
  const { tasks, addTask, setDoneTask, deleteTask } = useTodo([
    {
      id: Date.now(),
      body: "Wash the car",
      isDone: true,
    },
    {
      id: Date.now()+1,
      body: "Do the dishes",
      isDone: true,
    },
    {
      id: Date.now()+2,
      body: "Walk the dog",
      isDone: false,
    }
  ]);
  return (
    <div className={styles.container}>
      <TodoHeader />
      <div className={styles.inputBox}>
        <h3 className={styles.firstHeading}>New Task</h3>
        <TodoForm addTask={addTask} />
      </div>
      <div className={styles.tasksList}>
        <h3 className={styles.secondHeading}>Tasks</h3>
        <ul>
          <TodoItem
            tasks={tasks}
            setDoneTask={setDoneTask}
            deleteTask={deleteTask}
          />
        </ul>
      </div>
    </div>
  );
};

export default Todo;
