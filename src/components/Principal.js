import React from 'react'
import Perfil from "./Perfil";
import Content from "./Content";
import Menu from './Menu';

const Principal = () => {

    const user = "Omar Jiménez";

    return (
        <>
            <Menu content={"Documentación"}/>
            <Perfil user={user}/>
            <Content /> 
        </>
    )
}

export default Principal
