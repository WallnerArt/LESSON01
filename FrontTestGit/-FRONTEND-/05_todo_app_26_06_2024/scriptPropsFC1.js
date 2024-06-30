class Student extends React.Component {
    render() {
        // Деструктуризация props
        const { name, age } = this.props;
        return (
            <>
                <h1>Имя: {name}</h1>
                <h1>Возраст: {age}</h1>
            </>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        {/* Передача props */}
        <Student name="Tigran" age={50} />
        <Student name="John" age={25 - 6} />
        <Student name="Bill" age={23} />
        <Student name="Simeon" age={18} />
        <Student name="David" age={25} />
    </>
);

// div > p        Передача props возможна только от непосредственного родителя
// div > p