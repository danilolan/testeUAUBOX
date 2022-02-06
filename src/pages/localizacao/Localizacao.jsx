import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router";

//---STYLES---
import './localizacao.scss'

//---CONTEXT---
import { useData } from '../../context/data'

//---COMPONENTS---
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

//---SERVICES---
import validate from '../../services/validate'
import api from '../../services/api';


function Localizacao() {
    const { data, setData } = useData()
    const navigate = useNavigate();
    
    const [cep, setCep] = useState('');
    const [cepError, setCepError] = useState(false);

    const [endereco, setEndereco] = useState('');
    const [enderecoError, setEnderecoError] = useState(false);

    const [numero, setNumero] = useState('');
    const [numeroError, setNumeroError] = useState(false);

    const [complemento, setComplemento] = useState('');
    const [complementoError, setComplementoError] = useState(false);

    function searchCep(e){
        console.log('cep')
        e.preventDefault()
        setCepError(false)
        if(validate(cep,8)){
            api.viacep.get(`${cep}/json/`).then( resp => {
                if(resp.data.logradouro){
                    setEndereco(`${resp.data.logradouro} - ${resp.data.bairro}`)        
                }
                else{
                    setCepError(true)
                }
            })
        }
        else{
            setCepError(true)
        }
    }

    function next(e){
        console.log('next')
        e.preventDefault()
        setCepError(false)
        setComplementoError(false)
        setEnderecoError(false)
        setNumeroError(false)

        if(!validate(cep, 8)){
            setCepError(true)
            setCep('')
        }
        if(!validate(endereco)){
            setEnderecoError(true)
            setEndereco('')
        }
        if(!validate(numero)){
            setNumeroError(true)
            setNumero('')
        }
        if(!validate(complemento)){
            setComplementoError(true)
            setComplemento('')
        }

        if(validate(cep, 8) && validate(endereco) && validate(numero) && validate(complemento)){
            let dataEdit = data
            dataEdit.localizacao = { cep, endereco, numero , complemento }
            setData(dataEdit)
            navigate("/confirmacao", { replace: true });
            window.dispatchEvent(new Event('popstate'));  
        }
    }

    useEffect(() => {
        if(validate(cep,8)){
            setCepError(false)
            api.viacep.get(`${cep}/json/`).then( resp => {
                if(resp.data.logradouro){
                    setEndereco(`${resp.data.logradouro} - ${resp.data.bairro}`)
                }
            })
        }
    }, [cep]);
    
    
    

    function back(e){
        e.preventDefault()
        navigate("/dados-pessoais", { replace: true });
        window.dispatchEvent(new Event('popstate'));
    }

    return ( 
        <div className="localizacao">
            <div className="title"> Você está quase lá! </div>

            <form id='form'>
                <div className="row">
                    <Input
                        label='Cep'
                        value={cep}
                        setValue={setCep}
                        type='cep'
                        mask='99999-999'
                        error={cepError}
                        width='200px'
                    />

                    <Button
                        width='200px'
                        click={e => searchCep(e)}
                        type='button'
                    >
                        Buscar
                    </Button>
                </div>

                <div className="row">
                    <Input
                        label='Endereço'
                        value={endereco}
                        setValue={setEndereco}
                        type='endereco'
                        error={enderecoError}
                        width='500px'
                        maskChar=''
                    />
                </div>

                <div className="row">
                    <Input
                        label='Número'
                        value={numero}
                        setValue={setNumero}
                        type='numero'
                        mask='99999'
                        error={numeroError}
                        width='200px'
                        maskChar=''
                    />
                    <Input
                        label='Complemento'
                        value={complemento}
                        setValue={setComplemento}
                        type='complemento'
                        error={complementoError}
                        width='200px'
                        maskChar=''
                    />
                </div>

                <div className="hr-bar"/>

                <div className="row reverse">
                    <Button
                        width='300px'
                        click={back}
                        type='button'
                    >
                        Voltar
                    </Button>
                    <Button
                        isFill={true}
                        width='300px'
                        click={next}
                        type='submit'                  
                    >
                        Continuar
                    </Button>
                </div>
                

            </form>
        </div>
     );
}

export default Localizacao;