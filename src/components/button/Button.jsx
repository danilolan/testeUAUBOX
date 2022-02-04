import React from 'react';

//---STYLES---
import './button.scss'

function Button({click, width, isFill, children}) {
    return ( 
        <button
            className={isFill ? 'fill' : 'not-fill'}
            style={{width}}
            onClick={() => click()}
        >
            {children}
        </button>
     );
}

export default Button;