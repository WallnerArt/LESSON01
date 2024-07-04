import React, { Component } from 'react';
import { UserType } from './UserListFunction'; 
interface IProps {
    user: UserType;
    deleteUser: () => void;
    editUser: (user: UserType) => void;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
    isEditing: boolean;
    onSaveEdit: (user: UserType) => void;
}

interface IState {
    isEdit: boolean;
    name: string;
    company: string;
    phone: string;
}

export default class User extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isEdit: false,
            name: props.user.name,
            company: props.user.company.name,
            phone: props.user.phone,
        };
    }

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        this.setState({ ...this.state, [field]: e.target.value });
    };

    handleSaveEdit = () => {
        const updatedUser = {
            ...this.props.user,
            name: this.state.name,
            company: { ...this.props.user.company, name: this.state.company },
            phone: this.state.phone,
        };
        this.props.onSaveEdit(updatedUser);
        this.setState({ isEdit: false });
    };

    render() {
        const { user, deleteUser, isEditing } = this.props;
        const { name, company, phone } = this.state;

        return (
            <li className="list-group-item neon">
                {isEditing ? (
                    <div>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => this.handleInputChange(e, 'name')}
                        />
                        <input
                            type="text"
                            value={company}
                            onChange={(e) => this.handleInputChange(e, 'company')}
                        />
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => this.handleInputChange(e, 'phone')}
                        />
                        <button className="btn btn-primary btn-sm" onClick={this.handleSaveEdit}>Save</button>
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
                        <button className="btn btn-warning btn-sm me-2" onClick={() => this.setState({ isEdit: true })}>Edit</button>
                        <button className="btn btn-danger btn-sm" onClick={deleteUser}>Delete</button>
                    </div>
                )}
            </li>
        );
    }
}