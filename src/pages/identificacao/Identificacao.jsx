import React, {useState} from 'react';
import { useNavigate } from "react-router";

//---STYLES---
import './identificacao.scss'

//---COMPONENTS---
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

//---MASKS---
import emailMask from '../../services/masks/email'

//---CONTEXT---
import { useData } from '../../context/data'

function Identificacao() {
    const navigate = useNavigate();
    const { data, setData } = useData()

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    function next(e){
        e.preventDefault()
        if(emailMask(email)){
            let editData = data
            editData.email = email
            setData(editData)
            navigate("/dados-pessoais", { replace: true });
            window.dispatchEvent(new Event('popstate'));
        }
        else{
            setEmailError(true)
        }
    }

    return ( 
        <div className="identificacao">
            <div className="title"> O cadastro é rapidinho </div>
            <form>

                <div className="row"> 
                    <Input
                        label='E-mail'
                        value={email}
                        setValue={setEmail}
                        width='500px'
                        error={emailError}
                    />
                </div>

                <div className="hr-bar"/>

                <div className="row">
                    <Button
                        isFill={true}
                        width='300px'
                        click={next}
                    >
                        Continuar
                    </Button>
                </div>
            </form>
        </div>
     );
}

export default Identificacao;