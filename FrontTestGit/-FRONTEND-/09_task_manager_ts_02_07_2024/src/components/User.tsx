import React, { Component } from 'react';
import { UserType } from './UserList';

interface IProps {
  user: UserType;
  deleteUser: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
  isEditing: boolean;
  onSaveEdit: (user: UserType) => void;
}

interface IState {
  isEdit: boolean;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: string;
  address: string;
}

export default class User extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isEdit: props.isEditing,
      name: props.user.name,
      email: props.user.email,
      phone: props.user.phone,
      website: props.user.website,
      company: props.user.company.name,
      address: `${props.user.address.street}, ${props.user.address.suite}, ${props.user.address.city}, ${props.user.address.zipcode}, ${props.user.address.geo.lat}, ${props.user.address.geo.lng}`,
    };
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const value = e.target.value;
    const [mainField, subField] = field.split('.');
    if (subField) {
      this.setState((prevState) => ({
        ...prevState,
        [mainField]: {
          ...prevState[mainField],
          [subField]: value,
        },
      }));
    } else {
      this.setState({ [field]: value } as Pick<IState, keyof IState>);
    }
  };

  handleSaveEdit = () => {
    const updatedUser: UserType = {
      ...this.props.user,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      website: this.state.website,
      company: { ...this.props.user.company, name: this.state.company },
      address: {
        ...this.props.user.address,
        street: this.state.address.split(', ')[0],
        suite: this.state.address.split(', ')[1],
        city: this.state.address.split(', ')[2],
        zipcode: this.state.address.split(', ')[3],
        geo: {
          lat: this.state.address.split(', ')[4],
          lng: this.state.address.split(', ')[5],
        },
      },
    };
    this.props.onSaveEdit(updatedUser);
    this.setState({ isEdit: false });
  };

  render() {
    const { user, deleteUser } = this.props;
    const { isEdit, name, email, phone, website, company, address } = this.state;

    return (
      <li className="list-group-item neon">
        {isEdit ? (
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => this.handleInputChange(e, 'name')}
              className="form-control mb-2"
            />
            <input
              type="text"
              value={email}
              onChange={(e) => this.handleInputChange(e, 'email')}
              className="form-control mb-2"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => this.handleInputChange(e, 'phone')}
              className="form-control mb-2"
            />
            <input
              type="text"
              value={website}
              onChange={(e) => this.handleInputChange(e, 'website')}
              className="form-control mb-2"
            />
            <input
              type="text"
              value={company}
              onChange={(e) => this.handleInputChange(e, 'company')}
              className="form-control mb-2"
            />
            <input
              type="text"
              value={address}
              onChange={(e) => this.handleInputChange(e, 'address')}
              className="form-control mb-2"
            />
            <button onClick={this.handleSaveEdit} className="btn btn-success btn-sm me-2">
              Сохранять
            </button>
          </div>
        ) : (
          <div>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Имя:</strong> {user.name}</p>
            <p><strong>Телефон:</strong> {user.phone}</p>
            <p><strong>Электронная почта:</strong> {user.email}</p>
            <p><strong>Веб-сайт:</strong> {user.website}</p>
            <p><strong>Компания:</strong> {user.company.name}</p>
            <p><strong>Адрес:</strong> {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}, ${user.address.geo.lat}, ${user.address.geo.lng}`}</p>
            <button onClick={() => this.setState({ isEdit: true })} className="btn btn-warning btn-sm me-2">
              Редактировать
            </button>
            <button onClick={deleteUser} className="btn btn-danger btn-sm">Удалить</button>
          </div>
        )}
      </li>
    );
  }
}
