import React, { useState, useRef } from 'react';

interface TaskProps {
  task: {
    title: string;
    isCompleted: boolean;
    updatedAt: string;
  };
  deleteTask: () => void;
  editTask: (index: number, updatedTask: { title: string; isCompleted: boolean; updatedAt: string }) => void;
  index: number;
}

const Task: React.FC<TaskProps> = ({ task: { title, isCompleted, updatedAt }, deleteTask, editTask, index }) => {
  const [isEdit, setIsEdit] = useState(false);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleClickSave = () => {
    if (textRef.current) {
      editTask(index, {
        title: textRef.current.value,
        isCompleted,
        updatedAt: new Date().toISOString(),
      });
      setIsEdit(false);
    }
  };

  return (
    <div className={`card mb-3 ${isCompleted ? 'bg-light' : ''}`} style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <div className="card-body">
        {isEdit ? (
          <div>
            <textarea ref={textRef} defaultValue={title} className="form-control mb-2" />
            <button onClick={handleClickSave} className="btn btn-success btn-sm me-2">Save</button>
          </div>
        ) : (
          <div className="d-flex align-items-center">
            <p className={`mb-0 ${isCompleted ? 'text-decoration-line-through text-muted' : ''}`} style={{ flexGrow: 1 }}>
              {title}
            </p>
            <small className="text-muted me-5">Updated on: {new Date(updatedAt).toLocaleString()}</small>
            <input
              checked={isCompleted}
              onChange={() => editTask(index, { title, isCompleted: !isCompleted, updatedAt: new Date().toISOString() })}
              type="checkbox"
              className="form-check-input me-2"
            />
            <button onClick={() => setIsEdit(true)} className="btn btn-warning btn-sm me-2">Edit</button>
            <button onClick={deleteTask} className="btn btn-danger btn-sm">Del</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;