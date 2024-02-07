import React from 'react'
import { useForm } from '../../../hooks/useForm';
import { Patrimonio } from '../../../js/patrimonio ';
import './Form.scss'

export const Form = ({setDataMovent}) => {
  
  const patrimonio = new Patrimonio()
  const { descripcion, valor, tipo, onInputChange, setValues } = useForm({
    descripcion: '',
    valor: '',
    tipo: 'ingreso',
  });

  const handleOnSubmit = async(event) => {
    event.preventDefault()
    const result = await patrimonio.agregarDato(descripcion, valor, tipo, setDataMovent)
    setDataMovent(result)
  }

  return (
    <form id="forma" onSubmit={handleOnSubmit}>
      <div className="agregar">
        <div className="agregarContenedor">
        
          <select className="agregar_tipo" id="tipo" name="tipo" value={tipo} onChange={(e) => setValues({ ...{ descripcion, valor, tipo: e.target.value } })}>
            <option value="ingreso">+</option>
            <option value="egreso">-</option>
          </select>

          <input 
            type="text" 
            className="agregar_descripcion" 
            id="descripcion"
            name="descripcion" 
            value={descripcion} 
            onChange={onInputChange} 
            placeholder="Agregar Descripcion"
          />

          <input 
            type="number" 
            className="agregar_valor" 
            id="valor" 
            name="valor" 
            value={valor} 
            onChange={onInputChange} 
            placeholder="Valor" step="any"
          />
          
          <button className="agregar_btn">
            <ion-icon name="checkmark-circle-outline"></ion-icon>
          </button>
        
        </div>
      </div>
    </form>
  )
}
