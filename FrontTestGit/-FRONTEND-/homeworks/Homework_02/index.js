import React from 'react';
import ReactDOM from 'react-dom/client';

const DisplayComponent = ({ num }) => {
  return (
    <div style={{ display: 'flex', justifyContent: num % 2 === 0 ? 'flex-end' : 'flex-start' }}>
      <div>{num}</div>
    </div>
  );
};

const App = () => {
  const num = 3; // Mы можем изменить это значение для тестирования

  return (
    <>
      <h1>Hello world!</h1>
      <p>Hello from paragraph</p>
      <DisplayComponent num={num} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
