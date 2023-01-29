import React, { useState } from 'react';

import '../../styles/Dropdown.css';

export default function Dropdown({ title, datas, setItem }) {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClickDropddownItem = (data, index) => {
        setItem(data.value)
        setSelectedIndex(index);
        setIsVisible(false);
    }

    return (
        <div className="hrnet-dropdown">
            <div className="hrnet-dropdownSelection" onClick={e => setIsVisible(!isVisible)}>
                <p>{selectedIndex !== null ? datas[selectedIndex].label : `Select ${title}`}</p>
            </div>
            {isVisible ? (
                <div className="hrnet-dropdownList">
                    {datas.map((data, index) => (
                        <p key={data.value}
                            className="hrnet-dropdownItem"
                            onClick={e => handleClickDropddownItem(data, index)}>
                            {data.label}
                        </p>
                    ))}
                </div>
            ) : <></>} </div>
    )
}
