import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import UserDetails from './UserDetails';
import { addUser } from '../redux/userSlice';
import UserFC from './UserFC';

const UserListFC = () => {
    const { users, status, idSelectedUser } = useSelector((state: RootState) => state.persons);
    const dispatch: AppDispatch = useDispatch();

    const [userName, setUserName] = useState<string>('');
    const [companyName, setCompanyName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const handleAddUser = () => {
        const newUser = {
            id: users.length ? users[users.length - 1].id + 1 : 1,
            name: userName,
            company: {
                name: companyName
            },
            phone
        };
        dispatch(addUser(newUser));
        setUserName('');
        setCompanyName('');
        setPhone('');
    };

    return (
        idSelectedUser ? (<UserDetails />) : (
            <div className="container mt-4">
                <h1 className="mb-4 text-center">User List App</h1>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        value={userName}
                        name="name"
                        onChange={(e) => setUserName(e.target.value)}
                        className="form-control"
                        placeholder="New User Name"
                    />
                    <input
                        type="text"
                        value={companyName}
                        name="company"
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="form-control"
                        placeholder="New User Company Name"
                    />
                    <input
                        type="text"
                        value={phone}
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                        placeholder="New User Phone"
                    />
                    <button onClick={handleAddUser} className="btn btn-primary">
                        Add User
                    </button>
                </div>
                <div>
                    {status === "loading" && (
                        <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )}
                    {status === 'success' && users.map((user) => (
                        <UserFC
                            key={user.id}
                            user={user}
                        />
                    ))}
                    {status === "error" && (
                        <>Error!</>
                    )}
                </div>
            </div>
        )
    )
}

export default UserListFC;