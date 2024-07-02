import { useEffect, useState } from "react";
// import axios from "axios";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Task 1",
      isCompleted: false,
      updatedAt: new Date().toISOString(),
    },
    {
      title: "Task 2",
      isCompleted: false,
      updatedAt: new Date().toISOString(),
    },
    {
      title: "Task 3",
      isCompleted: false,
      updatedAt: new Date().toISOString(),
    },
  ]);
  const [newTask, setNewTask] = useState({
    title: "",
    isCompleted: false,
  });

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        // const data = (await axios.get("https://jsonplaceholder.typicode.com/todos")).data;
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTodos()
  }, []);

  const addTask = () => {
    if (newTask.title.trim()) {
      const tasksCopy = [...tasks];
      tasksCopy.push({ ...newTask, updatedAt: new Date().toISOString() });
      setTasks(tasksCopy);
    }
  };

  const deleteTask = (i) => {
    setTasks(tasks.filter((_, index) => i !== index));
  };

  const editTask = (i, updatedTask) => {
    setTasks(tasks.map((e, index) => (index === i ? updatedTask : e)));
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Task Manager App</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          value={newTask.title}
          onChange={(e) =>
            setNewTask({ title: e.target.value, isCompleted: false })
          }
          className="form-control"
          placeholder="New Task"
        />
        <button onClick={addTask} className="btn btn-primary">
          Add Task
        </button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            deleteTask={() => deleteTask(index)}
            editTask={editTask}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
