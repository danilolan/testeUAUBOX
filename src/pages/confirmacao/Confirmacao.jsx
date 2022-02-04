import React from 'react';

//---STYLES---
import './confirmacao.scss'

//---CONTEXT---
import { useData } from '../../context/data'

function Confirmacao() {
    const { data, setData } = useData()
    console.log(data)
    return ( 
        <div className="confirmacao">
            Confirmacao
        </div>
     );
}

export default Confirmacao;