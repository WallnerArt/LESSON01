import React, { Component, ReactNode } from 'react';

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

interface UserListClassState {
  users: UserType[];
  newUser: UserType;
  editingUser: UserType | null;
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

class UserListClass extends Component<{}, UserListClassState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [],
      newUser: {
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
      },
      editingUser: null
    };
  }

  componentDidMount(): void {
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
    this.setState({ users: data });
  }

  handleAddUser = () => {
    const id = this.state.users.length ? this.state.users[this.state.users.length - 1].id + 1 : 1;
    this.setState({
      users: [...this.state.users, { ...this.state.newUser, id }],
      newUser: {
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
      }
    });
  };

  handleEdit = (user: UserType) => {
    this.setState({ editingUser: { ...user } });
  };

  handleSaveEdit = () => {
    if (this.state.editingUser) {
      this.setState({
        users: this.state.users.map(user =>
          user.id === this.state.editingUser!.id ? this.state.editingUser! : user
        ),
        editingUser: null
      });
    }
  };

  handleDelete = (id: number) => {
    this.setState({
      users: this.state.users.filter(user => user.id !== id)
    });
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (this.state.editingUser) {
      this.setState({ editingUser: { ...this.state.editingUser, [field]: e.target.value } });
    } else {
      this.setState({ newUser: { ...this.state.newUser, [field]: e.target.value } });
    }
  };

  render(): ReactNode {
    return (
      <div className="container mt-4">
        <h1 className="mb-4 text-center neon">User List</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={this.state.newUser.name}
            onChange={(e) => this.handleInputChange(e, 'name')}
          />
          <input
            type="text"
            placeholder="Email"
            value={this.state.newUser.email}
            onChange={(e) => this.handleInputChange(e, 'email')}
          />
          <button className="btn btn-success btn-sm" onClick={this.handleAddUser}>Add User</button>
        </div>
        <ul className="list-group">
          {this.state.users.map((user) => (
            <User
              key={user.id}
              user={user}
              onEdit={() => this.handleEdit(user)}
              onDelete={() => this.handleDelete(user.id)}
              onInputChange={(e, field) => this.handleInputChange(e, field)}
              isEditing={this.state.editingUser?.id === user.id}
              onSaveEdit={this.handleSaveEdit}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserListClass;
