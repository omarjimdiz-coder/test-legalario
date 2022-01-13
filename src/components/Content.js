import { Link } from 'react-router-dom'
import React from 'react'
import Box from './Box'
import '../scss/Principal.scss'


const Content = () => {
    return (
        <div className='general'>
            <div className='principal'>
                <Link to="/ine">
                    <Box seccion={"INE"}/>
                </Link>
                <Box seccion={"Documento 2"}/>
                <Box seccion={"Documento 3"} />
                <Box seccion={"Documento 4"}/>
            </div>
        </div>
    )
}

export default Content
