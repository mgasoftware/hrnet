import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.jpg';
import '../../styles/Header.css';

export default function Header() {
    return (
        <header className="hrnet-header">
            <div className="hrnet-headerMain">
                <NavLink to="/" className="hrnet-headerLink">
                    <img src={logo} alt="logo hrnet" className="hrnet-headerLogo" />
                    <h1 className="hrnet-headerTitle">Hrnet</h1>
                </NavLink>
            </div>
            <div className="hrnet-headerNav">
                <NavLink to="/create" className="hrnet-headerCreateEmploye">
                    <p>Create Employee</p>
                </NavLink>
                <NavLink to="/employee" className="hrnet-headerListEmploye">
                    <p>Employee List</p>
                </NavLink>
            </div>
        </header>
    )
}
