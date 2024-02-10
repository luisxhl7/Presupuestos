import React from 'react'
import { useForm } from '../../../hooks/useForm';
import { Patrimonio } from '../../../js/patrimonio ';
import { SimpleInput } from '../../atoms/simpleInput/SimpleInput';
import { regEx } from '../../../constans/regEx.js';
import './Form.scss'

export const Form = ({setDataMovent}) => {
  
  const patrimonio = new Patrimonio()
  const { descripcion, valor, tipo, onInputChange, setValues, onResetForm } = useForm({
    descripcion: '',
    valor: '',
    tipo: 'ingreso',
  });

  const handleOnSubmit = async(event) => {
    event.preventDefault()
    if (regEx.regexDescription.test(descripcion) && regEx.regexNumero.test(valor)){
      const result = await patrimonio.agregarDato(descripcion, valor, tipo, setDataMovent)
      setDataMovent(result)
      onResetForm()
    }else{
      alert('datos insuficientes')
    }
  }
  

  return (
    <form id="forma" onSubmit={handleOnSubmit} autoComplete='off'>
      <div className="agregar">
        <div className="agregarContenedor">
        <label htmlFor="tipo">Movimiento: </label>
          <select className="agregar_tipo" id="tipo" name="tipo" value={tipo} onChange={(e) => setValues({ ...{ descripcion, valor, tipo: e.target.value } })}>
            <option value="ingreso">Ingreso</option>
            <option value="egreso">Egreso</option>
          </select>
          
          <SimpleInput
            type="text"
            autoFocus={true}
            id="descripcion"
            value={descripcion} 
            onChange={onInputChange}
            regEx={regEx.regexDescription}
            placeholder="Agregar Descripcion"
          />

          <SimpleInput
            type="number"
            autoFocus={false}
            className="agregar_valor" 
            id="valor" 
            value={valor} 
            onChange={onInputChange}
            regEx={regEx.regexNumero}
            placeholder="Valor" 
            step="any"
          />
          
          <button className="agregar_btn">
            <ion-icon name="checkmark-circle-outline"></ion-icon>
          </button>
        
        </div>
      </div>
    </form>
  )
}
