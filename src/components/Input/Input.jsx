import React from 'react';

//---STYLES---
import './input.scss'

//---COMPONENTS---
import InputMask from 'react-input-mask';

function Input({ label, value, setValue, error, width, type, mask, maskChar }) {
    return ( 
        <div className="input" style={width ? {width} : {width:'300px'}}>
            <div className="label">{label}</div>
            <InputMask 
                className={error ? 'error' : ''} 
                type="text" value={value} 
                onChange={ e => setValue(e.target.value)} 
                name={type}
                mask={mask}
                maskChar={maskChar}
            />
        </div>
     );
}

export default Input;