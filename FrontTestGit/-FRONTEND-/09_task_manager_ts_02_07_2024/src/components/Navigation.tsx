import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark neon">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Home</NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tasks">Tasks</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users">Users</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
