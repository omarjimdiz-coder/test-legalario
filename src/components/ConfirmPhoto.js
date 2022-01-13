import React from 'react'
import ok from '../assets/icons/Ok circle.svg';
import '../scss/Photo.scss'

const ConfirmPhoto = ({hasPhoto, photoRef, repeatPhoto}) => {
    

    return (
        <>
            <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
                <canvas ref={photoRef}></canvas>
                {
                    hasPhoto ?
                    <div className='buttons'>
                        <img src={ok} alt='ok'/>
                        <h5>Bien</h5>
                        <p>¡Has tomado exitosamente tu foto!</p>
                        <button className='continue'>
                            Continuar
                        </button>
                        <button onClick={repeatPhoto}>
                            Volver a tomar
                        </button>
                        </div>
                    : null
                }
            </div>
        </>
    )
}

export default ConfirmPhoto
