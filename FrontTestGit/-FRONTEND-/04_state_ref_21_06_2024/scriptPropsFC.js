const root = ReactDOM.createRoot(document.getElementById("root"));

// 2. Принятие props
const Student = (props) => {
    // 3. Использование props
    console.log(props);
    return (
        <>
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.age}</h1>
        </>
    )
}

root.render(
    <>
        {/* 1. Передача props */}
        <Student name='Tigran' age={50} />
        <Student name='John' age={25 - 6} />
        <Student name='Bill' age={23} />
        <Student name='Simeon' age={18} />
        <Student name='David' age={25} />
    </>
);
  
// div > p      Передача props возможна только от непосредственного родителя дочернему компоненту(!) 
// div p

{/* <div>
    <h1>
        <p></p>
    </h1>
</div> */}
