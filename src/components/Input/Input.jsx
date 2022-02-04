import React from 'react';

//---STYLES---
import './input.scss'

function Input({ label, value, setValue, error }) {
    return ( 
        <div className="input">
            <div className="label">{label}</div>
            <input className={error ? 'error' : ''} type="text" value={value} onChange={ e => setValue(e.target.value)} />
        </div>
     );
}

export default Input;