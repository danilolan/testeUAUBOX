import React, {useState, useEffect} from 'react';

//---STYLES---
import './aside.scss'

//---ASSETS---
import vectorImg from '../../assets/imgs/vector.png'

//---COMPONENTS---
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Aside() {

    //Progresslogic
    const [level, setLevel] = useState(['animation','','','']);
    const [progressCircle, setprogressCircle] = useState(0);
    useEffect(() => {
        checkPathName()
        window.addEventListener('popstate', checkPathName);
        return () => {
            window.removeEventListener('popstate', checkPathName);
        };
    }, []);

    function checkPathName(){
        if(window.location.pathname === '/identificacao'){
            setLevel(['animation','','',''])
            setprogressCircle(0)
        }
        else if(window.location.pathname === '/dados-pessoais'){
            setLevel(['active','animation','',''])
            setprogressCircle(25)
        }
        else if(window.location.pathname === '/localizacao'){
            setLevel(['active','active','animation',''])
            setprogressCircle(50)
        }
        else if(window.location.pathname === '/confirmacao'){
            setLevel(['active','active','active','animation'])
            setprogressCircle(75)
        }
    }

    return ( 
        <aside>
            <img src={vectorImg} alt="vector..." />

            <div className="steps-container">
                <div className={`step ${level[0]}`}>
                    <div className="num">1</div>
                    <div className="text">Identificação</div>
                </div>
                <div className="bar-container"> <div className={`bar ${level[0]}`}/> </div>
                <div className={`step ${level[1]}`}>
                    <div className="num">2</div>
                    <div className="text">Dados pessoais</div>
                </div>
                <div className="bar-container"> <div className={`bar ${level[1]}`}/> </div>
                <div className={`step ${level[2]}`}>
                    <div className="num">3</div>
                    <div className="text">Localização</div>
                </div>
                <div className="bar-container"> <div className={`bar ${level[2]}`}/> </div>
                <div className={`step ${level[3]}`}>
                    <div className="num">4</div>
                    <div className="text">Confirmação</div>
                </div>
            </div>

            <div className="progress-circle">
                <CircularProgressbar 
                    value={progressCircle}
                    counterClockwise={true}
                    styles={buildStyles({
                        pathColor: `#FF3333`,
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                    })}
                />
            </div>
        </aside>
     );
}

export default Aside;