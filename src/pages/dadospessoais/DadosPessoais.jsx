import React,{useState, useEffect} from 'react';
import { useNavigate } from "react-router";

//---STYLES---
import './dadospessoais.scss'

//---COMPONENTS---
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

//---SERVICES---
import validate from '../../services/validate'

//---CONTEXT---
import { useData } from '../../context/data'

function DadosPessoais() {
    const { data, setData } = useData()
    const navigate = useNavigate();

    const [nome, setNome] = useState(data.dadosPessoais.nome);
    const [sobrenome, setSobrenome] = useState(data.dadosPessoais.sobrenome);
    const [cpf, setCpf] = useState(data.dadosPessoais.cpf);
    const [telefone, setTelefone] = useState(data.dadosPessoais.telefone);
    const [dataNascimento, setDataNascimento] = useState(data.dadosPessoais.dataNascimento);

    const [nomeError, setNomeError] = useState(false);
    const [sobrenomeError, setSobrenomeError] = useState(false);
    const [cpfError, setCpfError] = useState(false);
    const [telefoneError, setTelefoneError] = useState(false);
    const [dataNascimentoError, setDataNascimentoError] = useState(false);

    function next(e){
        e.preventDefault()

        setNomeError(false)
        setSobrenomeError(false)
        setCpfError(false)
        setDataNascimentoError(false)
        setTelefoneError(false)
        
        if(!validate(nome)){
            setNomeError(true)
            setNome('')
        }
        if(!validate(sobrenome)){
            setSobrenomeError(true)
            setSobrenome('')
        }
        if(!validate(cpf,11)){
            setCpfError(true)
            setCpf('')
        }
        if(!validate(dataNascimento,8)){
            setDataNascimentoError(true)
            setDataNascimento('')
        }
        if(!validate(telefone,10)){
            setTelefoneError(true)
            setTelefone('')
        }

        if(validate(nome) && validate(sobrenome) && validate(cpf,11) && validate(dataNascimento,8) && validate(telefone,10)){
            let dataEdit = data
            dataEdit.dadosPessoais = { nome, sobrenome, cpf, telefone, dataNascimento }
            setData(dataEdit)
            navigate("/localizacao", { replace: true });
            window.dispatchEvent(new Event('popstate'));
        }
        
    }

    function back(e){
        e.preventDefault()
        navigate("/identificacao", { replace: true });
        window.dispatchEvent(new Event('popstate'));
    }

    return ( 
        <div className="dados-pessoais">
            <div className="title"> Nos conte sobre você </div>
            <form>

                <div className="row"> 
                    <Input
                        label='Nome'
                        value={nome}
                        setValue={setNome}
                        type='name'
                        mask='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                        maskChar= ''
                        error={nomeError}
                    />
                </div>
                <div className="row"> 
                    <Input
                        label='Sobrenome'
                        value={sobrenome}
                        setValue={setSobrenome}
                        type='lastName'
                        mask='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                        maskChar= ''
                        error={sobrenomeError}
                    />
                </div>
                <div className="row"> 
                    <Input
                        label='CPF'
                        value={cpf}
                        setValue={setCpf}
                        name='cpf'
                        mask='999.999.999-99'
                        error={cpfError}
                    />
                </div>
                <div className="row"> 
                    <Input
                        label='Data de nascimento'
                        value={dataNascimento}
                        setValue={setDataNascimento}
                        width='200px'
                        name='birthdate'
                        mask='99/99/9999'
                        error={dataNascimentoError}
                    />
                    <Input
                        label='Telefone'
                        value={telefone}
                        setValue={setTelefone}
                        width='200px'
                        name='telephone'
                        mask='(99)-99999-9999'
                        error={telefoneError}                      
                    />
                </div>

                <div className="hr-bar"/>

                <div className="row">
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
                        click={e => next(e)}
                        type='submit'
                    >
                        Continuar
                    </Button>
                </div>
            </form>
        </div>
     );
}

export default DadosPessoais;