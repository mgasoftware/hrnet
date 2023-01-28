import React from 'react';

import logo from '../../assets/logo.jpg'
import '../../styles/Home.css';
import Header from '../Features/Header';

export default function Home() {

    return (
        <div className="hrnet-home">
            <Header />
            <img src={logo} className="hrnet-homeLogo" alt="logo hrnet" />
        </div>
    )
}
