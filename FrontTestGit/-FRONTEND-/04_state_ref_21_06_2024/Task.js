const root = ReactDOM.createRoot(document.getElementById("root"));

const Task = () => {
  const [isEdit, setIsEdit] = React.useState(false);
  // Все React инструменты (hook) начинаются с приставки use (использовать).
  const [updatedTask, setUpdatedTask] = React.useState('Task 1');
  const textRef = React.useRef(); // { current: document.getElementById() }

  // console.log(textRef);
    const handleClickSave = () => {
      // 1. При клике на кнопку Save меняем значение isEdit, что приводит к перерисовке всего, что зависит от его значения
      setUpdatedTask(textRef.current.value);
      setIsEdit(false);
    }

  //   const handleClickEdit = () => {
  //     setIsEdit(true);
  //   }

  return isEdit ? (
    <>
      <textarea ref={textRef} defaultValue={updatedTask}></textarea>
      <button onClick={handleClickSave}>Save</button>
    </>
  ) : (
    <>
      <p>{updatedTask}</p>
      {/* () => setIsEdit(true)       setIsEdit(true)          setIsEdit */}
      <button onClick={() => setIsEdit(true)}>Edit</button>
      <button>Del</button>
    </>
  );
};

root.render(
  <>
    <Task />
  </>
);

/*
    Режим просмотра:

    <p>Name</p>
    <button>Edit</button>
    <button>Del</button>

    Режим редактирования:

    <textarea>Name</textarea>
    <button>Save</button>
*/
