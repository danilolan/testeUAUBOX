import React from 'react';

//---STYLES---
import './button.scss'

function Button({click, width, isFill, children, type, form}) {
    return ( 
        <button
            className={isFill ? 'fill' : 'not-fill'}
            style={{width}}
            onClick={(e) => click(e)}
            type={type}
        >
            {children}
        </button>
     );
}

export default Button;