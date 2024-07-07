import React from 'react';
import { UserType } from './UserList';

interface UserDetailsProps {
  user: UserType;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <div className="container mt-4">
      <h2>Информация о пользователе</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Имя:</strong> {user.name}</p>
      <p><strong>Телефон:</strong> {user.phone}</p>
      <p><strong>Электронная почта:</strong> {user.email}</p>
      <p><strong>Веб-сайт:</strong> {user.website}</p>
      <p><strong>Компания:</strong> {user.company.name}</p>
      <p><strong>Адрес:</strong> {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}, ${user.address.geo.lat}, ${user.address.geo.lng}`}</p>
    </div>
  );
};

export default UserDetails;
