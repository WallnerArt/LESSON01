import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import UserListFunction from './components/UserListFunction';
import UserListClass from './components/UserListClass';

const App: React.FC = () => {
  return (
    <div className="App">
      <TaskList />
      <UserListFunction />
      <UserListClass />
    </div>
  );
}

export default App;