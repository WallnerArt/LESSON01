import React, { useState, useEffect } from 'react';
import User from './User';
import { Link } from 'react-router-dom';

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
      };
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserType {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState<UserType[]>([]);
    const [newUser, setNewUser] = useState<UserType>({
        id: 0,
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: { lat: '', lng: '' }
        },
        phone: '',
        website: '',
        company: { name: '', catchPhrase: '', bs: '' }
    });
    const [editingUser, setEditingUser] = useState<UserType | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            const data: UserType[] = [
                {
                    id: 1,
                    name: 'John Doe',
                    username: 'johndoe',
                    email: 'john.doe@example.com',
                    address: {
                        street: 'Kulas Light',
                        suite: 'Apt. 556',
                        city: 'Gwenborough',
                        zipcode: '92998-3874',
                        geo: {
                            lat: '-37.3159',
                            lng: '81.1496',
                        },
                    },
                    phone: '1-770-736-8031 x56442',
                    website: 'hildegard.org',
                    company: {
                        name: 'Romaguera-Crona',
                        catchPhrase: 'Multi-layered client-server neural-net',
                        bs: 'harness real-time e-markets',
                    },
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    username: 'janesmith',
                    email: 'jane.smith@example.com',
                    address: {
                        street: 'Victor Plains',
                        suite: 'Suite 879',
                        city: 'Wisokyburgh',
                        zipcode: '90566-7771',
                        geo: {
                            lat: '-43.9509',
                            lng: '-34.4618',
                        },
                    },
                    phone: '1-463-123-4447',
                    website: 'anastasia.net',
                    company: {
                        name: 'Deckow-Crist',
                        catchPhrase: 'Proactive didactic contingency',
                        bs: 'synergize scalable supply-chains',
                    },
                },
                {
                    id: 3,
                    name: 'Sam Green',
                    username: 'samgreen',
                    email: 'sam.green@example.com',
                    address: {
                        street: 'Douglas Extension',
                        suite: 'Suite 847',
                        city: 'McKenziehaven',
                        zipcode: '59590-4157',
                        geo: {
                            lat: '-68.6102',
                            lng: '29.4572',
                        },
                    },
                    phone: '1-714-926-3243',
                    website: 'ramiro.info',
                    company: {
                        name: 'Keebler LLC',
                        catchPhrase: 'User-centric fault-tolerant solution',
                        bs: 'revolutionize end-to-end systems',
                    },
                },
            ];
            setUsers(data);
        };

        fetchUsers();
    }, []);

    const handleAddUser = () => {
        const id = users.length ? users[users.length - 1].id + 1 : 1;
        setUsers([...users, { ...newUser, id }]);
        setNewUser({
            id: 0,
            name: '',
            username: '',
            email: '',
            address: {
                street: '',
                suite: '',
                city: '',
                zipcode: '',
                geo: { lat: '', lng: '' }
            },
            phone: '',
            website: '',
            company: { name: '', catchPhrase: '', bs: '' }
        });
    };

    const handleEditUser = (updatedUser: UserType) => {
        setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
        setEditingUser(null);
    };

    const handleDeleteUser = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const value = e.target.value;
        setNewUser((prevUser) => {
            const fields = field.split('.');
            if (fields.length > 1) {
                return {
                    ...prevUser,
                    [fields[0]]: {
                        ...(prevUser as any)[fields[0]],
                        [fields[1]]: value,
                    },
                };
            } else {
                return {
                    ...prevUser,
                    [field]: value,
                };
            }
        });
    };

    const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const value = e.target.value;
        setEditingUser((prevUser) => {
            if (!prevUser) return null;
            const fields = field.split('.');
            if (fields.length > 1) {
                return {
                    ...prevUser,
                    [fields[0]]: {
                        ...(prevUser as any)[fields[0]],
                        [fields[1]]: value,
                    },
                };
            } else {
                return {
                    ...prevUser,
                    [field]: value,
                };
            }
        });
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center neon">Список пользователей</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="New User Name"
                    value={newUser.name}
                    onChange={(e) => handleInputChange(e, 'name')}
                    className="form-control mb-2"
                />
                <input
                    type="text"
                    placeholder="New User Email"
                    value={newUser.email}
                    onChange={(e) => handleInputChange(e, 'email')}
                    className="form-control mb-2"
                />
                <input
                    type="text"
                    placeholder="New User Website"
                    value={newUser.website}
                    onChange={(e) => handleInputChange(e, 'website')}
                    className="form-control mb-2"
                />
                <input
                    type="text"
                    placeholder="New User Phone"
                    value={newUser.phone}
                    onChange={(e) => handleInputChange(e, 'phone')}
                    className="form-control mb-2"
                />
                <input
                    type="text"
                    placeholder="New User Company Name"
                    value={newUser.company.name}
                    onChange={(e) => handleInputChange(e, 'company.name')}
                    className="form-control mb-2"
                />
                <input
                    type="text"
                    placeholder="New User Street"
                    value={newUser.address.street}
                    onChange={(e) => handleInputChange(e, 'address.street')}
                    className="form-control mb-2"
                />
                <input
                    type="text"
                    placeholder="New User Suite"
                    value={newUser.address.suite}
                    onChange={(e) => handleInputChange(e, 'address.suite')}
                    className="form-control mb-2"
                />
                <input
                    type="text"
                    placeholder="New User City"
                    value={newUser.address.city}
                    onChange={(e) => handleInputChange(e, 'address.city')}
                    className="form-control mb-2"
                />
                <input
                    type="text"
                    placeholder="New User Zipcode"
                    value={newUser.address.zipcode}
                    onChange={(e) => handleInputChange(e, 'address.zipcode')}
                    className="form-control mb-2"
                />
                <input
                    type="text"
                    placeholder="New User Geo Lat"
                    value={newUser.address.geo.lat}
                    onChange={(e) => handleInputChange(e, 'address.geo.lat')}
                    className="form-control mb-2"
                />
                <input
                    type="text"
                    placeholder="New User Geo Lng"
                    value={newUser.address.geo.lng}
                    onChange={(e) => handleInputChange(e, 'address.geo.lng')}
                    className="form-control mb-2"
                />
                <button className="btn btn-success btn-sm" onClick={handleAddUser}>Добавить пользователя</button>
            </div>
            <ul className="list-group" style={{ gap: '1cm', background: 'rgba(255, 255, 255, 0.8)' }}>
                {users.map((user) => (
                    <li key={user.id} className="list-group-item">
                        <Link to={`/users/${user.id}`}>
                            <p><strong>ID:</strong> {user.id}</p>
                            <p><strong>Имя:</strong> {user.name}</p>
                            <p><strong>Телефон:</strong> {user.phone}</p>
                            <p><strong>Электронная почта:</strong> {user.email}</p>
                            <p><strong>Веб-сайт:</strong> {user.website}</p>
                            <p><strong>Компания:</strong> {user.company.name}</p>
                            <p><strong>Адрес:</strong> {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}, ${user.address.geo.lat}, ${user.address.geo.lng}`}</p>
                        </Link>
                        <button onClick={() => setEditingUser(user)} className="btn btn-warning btn-sm me-2">
                            Редактировать
                        </button>
                        <button onClick={() => handleDeleteUser(user.id)} className="btn btn-danger btn-sm">Удалить</button>
                    </li>
                ))}
            </ul>
            {editingUser && (
                <div>
                    <h2>Редактировать пользователя</h2>
                    <input
                        type="text"
                        placeholder="User Name"
                        value={editingUser.name}
                        onChange={(e) => handleEditInputChange(e, 'name')}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        placeholder="User Email"
                        value={editingUser.email}
                        onChange={(e) => handleEditInputChange(e, 'email')}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        placeholder="User Website"
                        value={editingUser.website}
                        onChange={(e) => handleEditInputChange(e, 'website')}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        placeholder="User Phone"
                        value={editingUser.phone}
                        onChange={(e) => handleEditInputChange(e, 'phone')}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        placeholder="User Company Name"
                        value={editingUser.company.name}
                        onChange={(e) => handleEditInputChange(e, 'company.name')}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        placeholder="User Street"
                        value={editingUser.address.street}
                        onChange={(e) => handleEditInputChange(e, 'address.street')}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        placeholder="User Suite"
                        value={editingUser.address.suite}
                        onChange={(e) => handleEditInputChange(e, 'address.suite')}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        placeholder="User City"
                        value={editingUser.address.city}
                        onChange={(e) => handleEditInputChange(e, 'address.city')}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        placeholder="User Zipcode"
                        value={editingUser.address.zipcode}
                        onChange={(e) => handleEditInputChange(e, 'address.zipcode')}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        placeholder="User Geo Lat"
                        value={editingUser.address.geo.lat}
                        onChange={(e) => handleEditInputChange(e, 'address.geo.lat')}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        placeholder="User Geo Lng"
                        value={editingUser.address.geo.lng}
                        onChange={(e) => handleEditInputChange(e, 'address.geo.lng')}
                        className="form-control mb-2"
                    />
                    <button onClick={() => handleEditUser(editingUser)} className="btn btn-success btn-sm">
                        Сохранять
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserList;
