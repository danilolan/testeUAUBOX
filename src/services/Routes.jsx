import React from 'react';
import {Routes, Route, Navigate} from 'react-router'

//---Pages---
import Identificacao from '../pages/identificacao/Identificacao'
import DadosPessoais from '../pages/dadospessoais/DadosPessoais'
import Localizacao from '../pages/localizacao/Localizacao'
import Confirmacao from '../pages/confirmacao/Confirmacao'

function routes() {
    return ( 
    <Routes>
        <Route exact path='/' element={<Navigate to="/identificacao" />}/>
        <Route path='/identificacao' element={<Identificacao/>}/>
        <Route path='/dados-pessoais' element={<DadosPessoais/>}/>
        <Route path='/localizacao' element={<Localizacao/>}/>
        <Route path='/confirmacao' element={<Confirmacao/>}/>
    </Routes> );
}

export default routes;