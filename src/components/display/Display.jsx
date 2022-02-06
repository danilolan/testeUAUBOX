import React from 'react';

//---STYLES---
import './display.scss'

function Display({ children, label }) {
    return ( 
        <div className="display">
            <div className="label">
                {label}
            </div>
            <div className="content">
                {children}
            </div>
        </div>
     );
}

export default Display;