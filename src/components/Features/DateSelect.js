import React from 'react';

import '../../styles/DateSelect.css'

export default function DateSelect(props) {
    const handleChange = (e) => {
        props.setDate(new Date(e.target.value));
    }

    return (
        <div className="hrnet-dateselect">
            <p>{props.title}</p>
            <input
                name="date"
                type="date"
                onChange={handleChange}/>
        </div>
    )
}
