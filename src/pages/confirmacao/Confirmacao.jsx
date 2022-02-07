import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router";

//---STYLES---
import './confirmacao.scss'

//---ASSETS---
import boxImg from '../../assets/imgs/box.png'

//---COMPONENTS---
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import Display from '../../components/display/Display';
import Select from 'react-select'

//---CONTEXT---
import { useData } from '../../context/data'


const planos = [
    {
        id: 0,
        preco: '89,90',
        value: 'TESTEI',
        desc: 'Receba 1 Box por mês, por 01 mês',
        label: 'Assinatura Mensal - R$ 89,90'
    },
    {
        id: 1,
        preco: '79,90',
        value: 'AMEI',
        tipo: 'Trimestral',
        desc: 'Receba 1 Box por mês, por 03 meses',
        label: 'Assinatura Trimestral - R$ 79,90'
    },
    {
        id: 2,
        preco: '74,90',
        value: 'VICIE',
        tipo: 'Semestral',
        desc: 'Receba 1 Box por mês, durante 06 meses',
        label: 'Assinatura Semestral - R$ 74,90'
    },
    {
        preco: '69,90',
        value: 'NÃO VIVO SEM',
        tipo: 'Anual',
        desc: 'Receba 1 Box por mês, durante 12 meses',
        label: 'Assinatura Anual - R$ 69,90'
    },
]

const customSelectStyles = {
    control: (provided, state) => ({
        ...provided,
        width: '100%',
        border: '2px solid #646464;',
        borderRadius: '10px',
        padding: 5,
        color: '#646464',
        fontWeight: '700',
        fontSize: '1.3em',
        marginTop: '20px'
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: '#646464',
    })
}

function Confirmacao() {
    const { data, setData } = useData()
    const navigate = useNavigate();
    
    const [plano, setPlano] = useState(planos[0]);

    function next(e){
        let editData = data
        editData.plano = plano
        setData(editData)

        //---ENVIAR REQUISIÇÃO
        console.log(data)
        alert('Enviar requisição:')
        alert(JSON.stringify(data))
        //-------------------+
    }
    function back(){
        navigate("/localizacao", { replace: true });
        window.dispatchEvent(new Event('popstate'));
    }
    return ( 
        <div className="confirmacao">
            <div className="title"> Resumo da compra </div>

            <div className="content-container">
                <div className="infos-container">
                    <div className="row">
                        <Display
                            label='Nome:'
                        >
                            {data.dadosPessoais.nome} {data.dadosPessoais.sobrenome}
                        </Display>
                        <Display
                            label='E-mail:'
                        >
                            {data.email}
                        </Display>
                    </div>
                    <div className="row">
                        <Display
                            label='Data de nascimento:'
                        >
                            {data.dadosPessoais.dataNascimento}
                        </Display>
                        <Display
                            label='Telefone:'
                        >
                            {data.dadosPessoais.telefone}
                        </Display>
                        <div className="row">
                        <Display
                            label='Cpf:'
                        >
                            {data.dadosPessoais.cpf}
                        </Display>
                        </div>
                    </div>

                    <br />

                    <div className="row">
                        <Display
                            label='Endereco:'
                        >
                            {data.localizacao.endereco}
                        </Display>
                        <Display
                            label='Número:'
                        >
                            {data.localizacao.numero}
                        </Display>
                    </div>
                    <div className="row">
                        <Display
                            label='Cep:'
                        >
                            {data.localizacao.cep}
                        </Display>
                        <Display
                            label='Cidade:'
                        >
                            {data.localizacao.cidade}
                        </Display>
                        <Display
                            label='Estado:'
                        >
                            {data.localizacao.estado}
                        </Display>
                        <Display
                            label='Complemento:'
                        >
                            {data.localizacao.complemento}
                        </Display>
                    </div>
                </div>

                <div className="planos-container">
                    <div className="top-container">
                        <div className="plano-stats">
                            <div className="assinatura">
                                Assinatura {plano.preco}
                            </div>
                            <div className="desc">
                                {plano.desc}
                            </div>
                        </div>
                        <img src={boxImg} alt="box..." />
                    </div>
                    <Select 
                        options={planos} 
                        styles={customSelectStyles}
                        value={plano}
                        onChange={option => setPlano(option)}
                    />
                    
                </div>
            </div>

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
                    Finalizar
                </Button>
            </div>
        </div>
     );
}

export default Confirmacao;