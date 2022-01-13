import React from 'react'
import '../scss/Perfil.scss';
import back from '../assets/icons/Regresar.svg';
import perfil from '../assets/img/omar-jimenez.jpg';


const Perfil = ({user}) => {
    return (
        <div className='perfil'>
            <img src={back}/>
            <div className='perfil'>
                <img src={perfil} />
                <h2>{user}</h2>
            </div>
        </div>
    )
}

export default Perfil