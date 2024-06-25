const root = ReactDOM.createRoot(document.getElementById("root"));

// If  /  else
const Cohort40FS = () => {
    const num = 3;

    if (num % 2) {

        return (
            <div>
                <h1 style={{ textAlign: "left" }}>Cohort40FS</h1>
                <h1 className="text-center">Cohort40FS</h1>
            </div>

        );

    } else {

        return (
            <div>
                <h1 style={{ textAlign: "right" }}>Cohort40FS</h1>
                <h1 className="text-center">Cohort40FS</h1>
            </div>
        );

    }
};

root.render(
    <>
        <Cohort40FS />
    </>
);
