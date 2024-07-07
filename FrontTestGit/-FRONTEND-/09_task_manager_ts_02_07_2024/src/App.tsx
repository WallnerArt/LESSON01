import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import UserList from './components/UserList';
import Navigation from './components/Navigation';
import UserDetails from './components/UserDetails';

const App: React.FC = () => {
  const [users, setUsers] = React.useState<UserType[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const data: UserType[] = [
        // ваш массив пользователей
      ];
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <Router>
      <Navigation />
      <div className="container mt-4">
        <Routes>
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails users={users} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
