import React from 'react'
import './simpleInput.scss'

export const SimpleInput = ({type, autoFocus, id, value, onChange, placeholder, regEx}) => {
    return (
        <input 
            type={type}
            autoFocus={autoFocus}
            className={`agregar_descripcion ${value.trim() !== '' && !regEx.test(value) ? '--error': ''}` }
            id={id}
            name={id} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder}
        />
                
    )
}
