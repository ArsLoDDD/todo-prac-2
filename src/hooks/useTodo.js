import { useState } from "react";

const useTodo = (initialValue) => {
  const [tasks, setTasks] = useState(initialValue);

  return {
    tasks,
    addTask: (value) => {
      if (value.body !== "") {
        const newTask = {
          id: Date.now(),
          body: value.body,
          isDone: false,
        };
        setTasks([...tasks, newTask]);
      }
    },
    setDoneTask: (id) => {
      setTasks(
        tasks.map((task) => {
          if (task.id === id) {
            task.isDone = true;
            console.log(tasks);
            return task;
          } else {
            return task;
          }
        })
      );
    },
    deleteTask: (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    },
    selectTask: (valueSelect) => {
      if(valueSelect === 'All'){
        setTasks(tasks.filter((task) => task));
      }
      if(valueSelect === 'Done'){
        setTasks(tasks.filter((task) => task.isDone === true));
      }
      if(valueSelect === 'NotDone'){
        setTasks(tasks.filter((task) => task.isDone === false));
      }
      return tasks;
    },
  };
};

export default useTodo;
