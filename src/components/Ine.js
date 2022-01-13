import React from 'react'
import Menu from './Menu'
import Aviso from './Aviso'
import Coloca from './Coloca'
import TakeAPhoto from './TakeAPhoto'


const Ine = () => {
    return (
        <>
            <Menu content={"Firma de contrato"}/>
            <Aviso />
            <Coloca />
            <TakeAPhoto />
        </>
    )
}

export default Ine