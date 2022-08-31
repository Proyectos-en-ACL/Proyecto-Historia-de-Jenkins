import React from 'react'
import "./Titulo.css"

const Titulo = ({saludo, boolean}) =>  {
    if (boolean){
        return <h1 className="back-gris">{saludo}</h1> 
    }
    return <h1 className="">{saludo}</h1> 
};

export default Titulo;
