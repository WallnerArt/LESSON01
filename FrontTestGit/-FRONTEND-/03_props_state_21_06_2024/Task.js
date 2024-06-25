const root = ReactDOM.createRoot(document.getElementById("root"));

const Task = () => {
    const [isEdit, setIsEdit] = React.useState(false);

    const handleClickSave = () => {

        // 
        setIsEdit(false);
    }
    const handleClickEdit = () => {
        setIsEdit(true);
    }


    return isEdit ? (
        <>
            <textarea defaultValue='Test'></textarea>
            <button onClick={handleClickSave}>Save</button>
        </>
    ) : (
        <>
            <p>Name</p>
            <button onClick={handleClickEdit}>Edit</button>
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
