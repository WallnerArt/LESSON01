const root = ReactDOM.createRoot(document.getElementById("root"));

// DRY - Don't repeat yourself
// 1. If / else
const Cohort40FS1 = () => {
  const num = 2;

  if (num % 2) {
    return (
      <div>
        <h1 style={{ textAlign: "left" }}>Cohort40FS</h1>
        <h1 className="text-center">Cohort40FS</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "right" }}>Cohort40FS</h1>
      <h1 className="text-center">Cohort40FS</h1>
    </div>
  );
};

// 2. Ternary operator
const Cohort40FS2 = () => {
  const num = 2;

  return num % 2 ? (
    <div>
      <h1 style={{ textAlign: "left" }}>Cohort40FS</h1>
      <h1 className="text-center">Cohort40FS</h1>
    </div>
  ) : (
    <div>
      <h1 style={{ textAlign: "right" }}>Cohort40FS</h1>
      <h1 className="text-center">Cohort40FS</h1>
    </div>
  );
};

// 3. Advanced*
const Cohort40FS3 = () => {
  const num = 2;

  return (
    <div>
      {/* <h1 style={ num % 2 ? { textAlign: "left" } : { textAlign: "right" }}>Cohort40FS</h1> */}
      <h1 style={{ textAlign: num % 2 ? "left" : "right" }}>Cohort40FS</h1>
      <h1 className="text-center">Cohort40FS</h1>
    </div>
  );
};

root.render(
  <>
    <Cohort40FS3 />
  </>
);
