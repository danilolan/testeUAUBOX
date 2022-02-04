import React from 'react';
import {Routes, Route} from 'react-router'

//---Pages---
import Identificacao from '../pages/identificacao/Identificacao'
import DadosPessoais from '../pages/dadospessoais/DadosPessoais'
import Confirmacao from '../pages/confirmacao/Confirmacao'

function routes() {
    return ( 
    <Routes>
        <Route exact path='/' element={<Identificacao/>}/>
        <Route path='/identificacao' element={<Identificacao/>}/>
        <Route path='/dados-pessoais' element={<DadosPessoais/>}/>
        <Route path='/confirmacao' element={<Confirmacao/>}/>
    </Routes> );
}

export default routes;