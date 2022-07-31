import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import styles from "./TodoItem.module.scss"

const TodoItem = (props) => {
  const { tasks, deleteTask, setDoneTask } = props;
  return (
    <>
      {tasks.map((task) => (
        <li className={styles.taskNotDone}  key={task.id}>
            {task.isDone ? <CheckCircleIcon/> : <RadioButtonUncheckedIcon
            onClick={() => {
              setDoneTask(task.id);
            }}
          />}
          <p>{task.body}</p>
          <CloseIcon className={styles.crossDelete} 
            onClick={() => {
              deleteTask(task.id);
            }}
          />
        </li>
      ))}
    </>
  );
};

export default TodoItem;
