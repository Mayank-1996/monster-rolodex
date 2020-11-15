import React from 'react';
import './search-box.styles.css';

export default function searchBox({placeholder,handleChange}) {
    return (
        <div >
            <input className="search" type="search" placeholder={placeholder} onChange={handleChange}></input>
        </div>
    )
}
