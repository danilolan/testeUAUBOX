import React from 'react';

//---STYLES---
import './input.scss'

function Input({ label, value, setValue, error, width }) {
    return ( 
        <div className="input" style={width ? {width} : {width:'300px'}}>
            <div className="label">{label}</div>
            <input 
                className={error ? 'error' : ''} 
                type="text" value={value} 
                onChange={ e => setValue(e.target.value)} 
            />
        </div>
     );
}

export default Input;