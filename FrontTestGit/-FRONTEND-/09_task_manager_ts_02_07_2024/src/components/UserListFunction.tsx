import React, { useState, useEffect } from 'react';

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

interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface UserProps {
  user: UserType;
  onEdit: () => void;
  onDelete: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
  isEditing: boolean;
  onSaveEdit: () => void;
}

const User: React.FC<UserProps> = ({ user, onEdit, onDelete, onInputChange, isEditing, onSaveEdit }) => {
  return (
    <li className="list-group-item neon">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={user.name}
            onChange={(e) => onInputChange(e, 'name')}
          />
          <input
            type="text"
            value={user.email}
            onChange={(e) => onInputChange(e, 'email')}
          />
          <button className="btn btn-primary btn-sm" onClick={onSaveEdit}>Save</button>
        </div>
      ) : (
        <div>
          <strong>ID:</strong> {user.id}<br />
          <strong>Name:</strong> {user.name}<br />
          <strong>Phone:</strong> {user.phone}<br />
          <strong>Email:</strong> {user.email}<br />
          <strong>Website:</strong> {user.website}<br />
          <strong>Company:</strong> {user.company.name}<br />
          <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}, {user.address.geo.lat}, {user.address.geo.lng}
          <br />
          <button className="btn btn-warning btn-sm me-2" onClick={onEdit}>Edit</button>
          <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
        </div>
      )}
    </li>
  );
}

const UserListFunction: React.FC = () => {
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
      const data = [
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

  const handleEdit = (user: UserType) => {
    setEditingUser(user);
  };

  const handleSaveEdit = () => {
    if (editingUser) {
      setUsers(users.map(user =>
        user.id === editingUser.id ? editingUser : user
      ));
      setEditingUser(null);
    }
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (editingUser) {
      setEditingUser({ ...editingUser, [field]: e.target.value });
    } else {
      setNewUser({ ...newUser, [field]: e.target.value });
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center neon">User List</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => handleInputChange(e, 'name')}
        />
        <input
          type="text"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => handleInputChange(e, 'email')}
        />
        <button className="btn btn-success btn-sm" onClick={handleAddUser}>Add User</button>
      </div>
      <ul className="list-group">
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            onEdit={() => handleEdit(user)}
            onDelete={() => handleDelete(user.id)}
            onInputChange={(e, field) => handleInputChange(e, field)}
            isEditing={editingUser?.id === user.id}
            onSaveEdit={handleSaveEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserListFunction;
