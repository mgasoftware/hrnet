import React from 'react';

import '../../styles/DateSelect.css'

export default function DateSelect(props) {
    const {setDate, title} = props;
    const handleChange = (e) => {
        setDate(new Date(e.target.value));
    }

    return (
        <div className="hrnet-dateselect">
            <label htmlFor={title} className="hrnet-dateselectTitle">{title}</label>
            <input
                name="date"
                type="date"
                className="hrnet-formInfosInputContainer"
                onChange={handleChange}/>
        </div>
    )
}
