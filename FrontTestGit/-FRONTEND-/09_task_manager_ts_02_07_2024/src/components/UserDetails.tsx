import { FC } from "react";
import { IUser } from "./UserList";

interface IProps extends IUser {
    changeIsDetails: (userDetails: IUser | null) => void;
}

const UserDetails: FC<IProps> = ({
  name: userName,
  company: { name: companyName },
  phone,
  email,
  address,
  website,
  changeIsDetails
}) => {
    const {street, city, geo, suite, zipcode} = address as {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    }
  return (
    <div className="container mt-4">
        <h1 className="text-center">{userName}</h1>
        <p><strong>Company:</strong> {companyName}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Website:</strong> {website}</p>
        <ul>
            <li><strong>Street:</strong> {street}</li>
            <li><strong>Suite:</strong> {suite}</li>
            <li><strong>City:</strong> {city}</li>
            <li><strong>Zipcode:</strong> {zipcode}</li>
            <li><strong>Geolocation:</strong> {geo.lat}(latitude), {geo.lng}(longitude) </li>
        </ul>
        <button onClick={() => changeIsDetails(null)}>Close</button>
    </div>
  );
};

export default UserDetails;
