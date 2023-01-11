import React, { useState } from 'react';

import logo from '../../assets/logo.jpg'
import '../../styles/Home.css';
import Header from '../Features/Header';
import DateSelect from '../Features/DateSelect';

export default function Home() {
    const [date, setDate] = useState(new Date());
    console.log(date.toLocaleDateString("en-US"));
    return (
        <div className="hrnet-home">
            <Header />
            <img src={logo} className="hrnet-homeLogo" alt="logo hrnet" />
            <DateSelect title="Date of Birth" date={date} setDate={setDate} />
        </div>
    )
}
