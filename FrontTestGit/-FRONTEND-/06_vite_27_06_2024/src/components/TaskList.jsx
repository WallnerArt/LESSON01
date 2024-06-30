
import React from 'react';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = React.useState([
    { title: 'Task 1', isCompleted: false, lastEdited: '' },
    { title: 'Task 2', isCompleted: false, lastEdited: '' },
    { title: 'Task 3', isCompleted: false, lastEdited: '' }
  ]);
  const [newTask, setNewTask] = React.useState({ title: '', isCompleted: false, lastEdited: '' });

  const addTask = () => {
    if (newTask.title.trim()) {
      const tasksCopy = [...tasks];
      tasksCopy.push(newTask);
      setTasks(tasksCopy);
      setNewTask({ title: '', isCompleted: false, lastEdited: '' });
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index, updatedTask) => {
    setTasks(tasks.map((task, i) => (i === index ? updatedTask : task)));
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Task Manager App</h1>
      <div className="input-group mb-3">
        <input 
          type="text"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
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
            editTask={(updatedTask) => editTask(index, updatedTask)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;

