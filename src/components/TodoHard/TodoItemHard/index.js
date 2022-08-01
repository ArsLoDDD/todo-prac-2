import React from "react";
import styles from "./TodoItemHard.module.scss";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import CheckIcon from "@mui/icons-material/Check";
const TodoItemHard = (props) => {
  const { tasks, deleteTask, setDoneTask } = props;
  return (
    <>
      {tasks.map((task) => (
        <li
          className={task.isDone ? styles.taskIsDone : styles.taskNotDone}
          key={task.id}
        >
          <p>{task.body}</p>
          <div
            onClick={() => {
              setDoneTask(task.id);
            }}
            className={task.isDone ? styles.doneCheckIsDone : styles.doneCheck}
          >
            <CheckIcon />
          </div>
          <div
            className={
              task.isDone ? styles.crossDeleteIsDone : styles.crossDelete
            }
          >
            <DeleteSharpIcon
              onClick={() => {
                deleteTask(task.id);
              }}
            />
          </div>
        </li>
      ))}
    </>
  );
};

export default TodoItemHard;