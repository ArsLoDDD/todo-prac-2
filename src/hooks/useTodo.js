import { useState } from "react";

const useTodo = (initialValue) => {
  const [tasks, setTasks] = useState(initialValue);
  const [filterTasks, setFilterTasks] = useState([]);
  return {
    tasks,filterTasks,
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
            setFilterTasks(tasks)
            return task;
          } else {
            return task;
          }
          
        })
      );
    },
    deleteTask: (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
      setFilterTasks(tasks)
    },
    selectTask: (valueSelect) => {
      if(valueSelect === 'All'){
        setFilterTasks(tasks)
      }
      if(valueSelect === 'Done'){
        setFilterTasks(tasks.filter((task) => task.isDone === true));
      }
      if(valueSelect === 'NotDone'){
        setFilterTasks(tasks.filter((task) => task.isDone === false));
      }
      return tasks;
    },
  };
};

export default useTodo;
