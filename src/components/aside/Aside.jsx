import React, {useState, useEffect} from 'react';

//---STYLES---
import './aside.scss'

//---ASSETS---
import vectorImg from '../../assets/imgs/vector.png'

function Aside() {

    //Progress bar logic
    const [level, setLevel] = useState(['animation','','','']);
    useEffect(() => {
        if(window.location.pathname === '/identificacao'){
            setLevel(['animation','','',''])
        }
        else if(window.location.pathname === '/dados-pessoais'){
            setLevel(['active','animation','',''])
        }
        else if(window.location.pathname === '/localizacao'){
            setLevel(['active','active','animation',''])
        }
        else if(window.location.pathname === '/confirmacao'){
            setLevel(['active','active','active','animation'])
        }
    }, [window.location.pathname]);

    return ( 
        <aside>
            <img src={vectorImg} alt="vector..." />

            <div className="steps-container">
                <div className="step">
                    <div className="num">1</div>
                    <div className="text">Identificação</div>
                </div>
                <div className="bar-container"> <div className={`bar ${level[0]}`}/> </div>
                <div className="step">
                    <div className="num">2</div>
                    <div className="text">Dados pessoais</div>
                </div>
                <div className="bar-container"> <div className={`bar ${level[1]}`}/> </div>
                <div className="step">
                    <div className="num">3</div>
                    <div className="text">Localização</div>
                </div>
                <div className="bar-container"> <div className={`bar ${level[2]}`}/> </div>
                <div className="step">
                    <div className="num">4</div>
                    <div className="text">Confirmação</div>
                </div>
                <div className="bar-container"> <div className={`bar ${level[3]}`}/> </div>
            </div>
        </aside>
     );
}

export default Aside;