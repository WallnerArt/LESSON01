import React, { useEffect, useState } from 'react';
import Task from './Task';

interface TaskType {
  title: string;
  isCompleted: boolean;
  updatedAt: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTask, setNewTask] = useState({ title: '', isCompleted: false });

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = [
          { title: 'Сделать стирку', isCompleted: false },
          { title: 'Написать блог', isCompleted: false },
          { title: 'Прочитать книгу', isCompleted: false },
          { title: 'Заняться спортом', isCompleted: false },
          { title: 'Приготовить ужин', isCompleted: false },
          { title: 'Позвонить другу', isCompleted: false },
          { title: 'Спланировать поездку', isCompleted: false },
          { title: 'Купить продукты', isCompleted: false },
          { title: 'Убраться в доме', isCompleted: false },
          { title: 'Завершить проект', isCompleted: false }
        ];

        const tasksWithUpdatedAt = data.map(task => ({
          ...task,
          updatedAt: new Date().toISOString()
        }));

        setTasks(tasksWithUpdatedAt);
        console.log(tasksWithUpdatedAt);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTodos();
  }, []);

  const addTask = () => {
    if (newTask.title.trim()) {
      const tasksCopy = [...tasks];
      tasksCopy.push({ ...newTask, updatedAt: new Date().toISOString() });
      setTasks(tasksCopy.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()));
      setNewTask({ title: '', isCompleted: false });
    }
  };

  const deleteTask = (index: number) => {
    const tasksCopy = tasks.filter((_, i) => i !== index);
    setTasks(tasksCopy.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()));
  };

  const editTask = (index: number, updatedTask: TaskType) => {
    const tasksCopy = tasks.map((task, i) => (i === index ? updatedTask : task));
    setTasks(tasksCopy.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()));
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Task Manager App</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          value={newTask.title}
          onChange={(e) => setNewTask({ title: e.target.value, isCompleted: false })}
          className="form-control"
          placeholder="New Task"
        />
        <button onClick={addTask} className="btn btn-primary">Add Task</button>
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