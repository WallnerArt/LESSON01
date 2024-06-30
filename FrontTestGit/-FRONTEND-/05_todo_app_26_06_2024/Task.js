const root = ReactDOM.createRoot(document.getElementById("root"));

const Task = ({
  task: { title, isCompleted },
  deleteTask,
  editTask,
  index,
}) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const textRef = React.useRef(); // { current: document.getElementById() }

  const handleClickSave = () => {
    editTask(index, { title: textRef.current.value, isCompleted });
    setIsEdit(false);
  };

  return (
    <div
      className={`card mb-3 ${isCompleted ? "bg-light" : ""}`}
      style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
    >
      <div className="card-body">
        {isEdit ? (
          <div>
            <textarea
              ref={textRef}
              defaultValue={title}
              className="form-control mb-2"
            ></textarea>
            <button
              onClick={handleClickSave}
              className="btn btn-success btn-sm me-2"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="d-flex align-items-center">
            <p
              className={`mb-0 ${
                isCompleted ? "text-decoration-line-through text-muted" : ""
              }`}
              style={{ flexGrow: 1 }}
            >
              {title}
            </p>
            <input
              checked={isCompleted}
              onChange={() =>
                editTask(index, { title, isCompleted: !isCompleted })
              }
              type="checkbox"
              className="form-check-input me-2"
            />
            <button
              onClick={() => setIsEdit(true)}
              className="btn btn-warning btn-sm me-2"
            >
              Edit
            </button>
            <button onClick={deleteTask} className="btn btn-danger btn-sm">
              Del
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const TaskList = () => {
  //
  const [tasks, setTasks] = React.useState([
    { title: "Task 1", isCompleted: false },
    { title: "Task 2", isCompleted: false },
    { title: "Task 3", isCompleted: false },
  ]);
  const [newTask, setNewTask] = React.useState({
    title: "",
    isCompleted: false,
  });

  const addTask = () => {
    if (newTask.title.trim()) {
      const tasksCopy = [...tasks];
      tasksCopy.push(newTask);
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
      <h1 className="mb-4">Task Manager App</h1>
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

root.render(
  <>
    <TaskList />
  </>
);
