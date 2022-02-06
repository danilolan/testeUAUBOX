import React, { createContext, useState, useContext } from 'react';

export const DataContext = createContext()

const initialState = {
    email: "didoherculano@gmail.com",
    dadosPessoais: {
        nome: "Danilo",
        sobrenome: "Herculano",
        cpf: "099.056.564-56",
        telefone: "(83)-99138-6478",
        dataNascimento: "01/02/2001"
    },
    localizacao: {
        cep: "58400-260",
        endereco: "Rua Desembargador Trindade - Centro",
        numero: "327",
        complemento: "Apto 2201",
        cidade: "Campina grande",
        estado: "PB"
    },
    plano: ""
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
