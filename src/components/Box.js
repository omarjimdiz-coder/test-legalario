import React from 'react'

const Box = ({seccion}) => {

    const style = {
        backgroundColor: "#1B365D",
        width: '180px',
        height: '180px', 
        borderRadius: '10px',
        marginBottom: '10px',
        cursor: 'Pointer'
    }

    return (
        <div>
            <figure style={style} />
            <h4>{seccion}</h4>
        </div>
    )
}

export default Box
