import { Route, Routes } from 'react-router-dom';
import './index.css';
import UserList, { IUser } from './components/UserList';
import Layout from './components/Layout';
import TaskList from './components/TaskList';
import UserDetails from './components/UserDetails';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from './redux/taskSlice';
import { AppDispatch } from './redux/store';

function App() {
  const [user, setUser] = useState<IUser | null>(null);
  const [change, setChange] = useState<(() => void) | null>(null);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<TaskList />} />
        <Route path='/users' element={<UserList setUser={setUser} setChange={setChange} />} />
        <Route path='/users/:id' element={user && change ? <UserDetails {...user} changeIsDetails={change} /> : <div>No user selected</div>} />
      </Route>
    </Routes>
  );
}

export default App;
