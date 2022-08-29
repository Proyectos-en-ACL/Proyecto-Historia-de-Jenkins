import React from 'react'
import "./button.css"

const Button = ({saludo}) =>  {
  
    return <div className='storybook-button storybook-button--medium storybook-button--primary'>{saludo}</div> 
};

export default Button;
