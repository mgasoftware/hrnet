import React from 'react';

import '../../styles/DateSelect.css'

export default function DateSelect(props) {
    const handleChange = (e) => {
        props.setDate(new Date(e.target.value));
    }

    return (
        <div className="hrnet-dateselect">
            <label htmlFor={props.title}>{props.title}</label>
            <input
                name="date"
                type="date"
                onChange={handleChange}/>
        </div>
    )
}
