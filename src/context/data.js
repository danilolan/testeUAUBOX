import React, { createContext, useState, useContext } from 'react';

export const DataContext = createContext()

const initialState = {
    email: '',
    dadosPessoais: {
        nome: '',
        sobrenome: '',
        cpf: '',
        telefone: '',
        dataNascimento: ''
    },
    localizacao: {
        cep: '',
        endereco: '',
        numero: '',
        complemento: ''
    },
    plano: ''
}

export default function DataProvider({children}){
    const [data, setData] = useState(initialState);

    return(
        <DataContext.Provider
            value={{
                data,
                setData
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export function useData(){
    const context = useContext(DataContext)
    const { data, setData } = context
    return { data, setData }
}
