import React, { useEffect, useState } from 'react'
import { formatoMoneda, formatoPorcentaje } from '../../../js/formatos'
import { Patrimonio } from '../../../js/patrimonio '
import './Stats.scss'

export const Stats = ({data, setDataMovent}) => {
  const patrimonio = new Patrimonio()
  const [dataIngresos, setDataIngresos] = useState()
  const [dataEgresos, setDataEgresos] = useState()

  
  useEffect(() => {
    const result = patrimonio.getIngresos()
    const result2 = patrimonio.getEgresos()
    setDataIngresos(result)
    setDataEgresos(result2)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const eliminarEgreso = (id) =>{
    const resp = patrimonio.eliminarEgreso(id)
    setDataMovent(resp)
  }

  return (
    <div className="contenedor">
      <div className="contenedor__ingreso">
        <h2 className='contenedor__ingreso_titulo'>Ingresos</h2>
        <div id='lista-ingresos'>
          {dataIngresos?.map( (item) => (
            <div className="contenedor__elemento" key={item?.id}>
              <span className="contenedor__elemento_descripcion" title={item?.descripcion}>
                {item?.descripcion}
              </span>
              <div className="contenedor__derecha">
                <div className="contenedor__elemento_eliminar">
                  <span className="contenedor__elemento_valor" title={`+ ${formatoMoneda(item?.valor)}`}>
                    {`+${formatoMoneda(item?.valor)}`}
                  </span>
                  <button className='contenedor__elemento_eliminar--btn'>
                    <ion-icon name="close-circle-outline" onClick={() => eliminarEgreso(item?.id)}></ion-icon>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="contenedor__egreso">
        <h2 className='contenedor__egreso_titulo'>egresos</h2>
        <div id='lista-egresos'>
          {dataEgresos?.map( (item, idx) => (
            <div className="contenedor__elemento" key={idx}>
              <div className="contenedor__elemento_descripcion" title={item?.descripcion}>
                {item?.descripcion}
              </div>
              <div className="contenedor__derecha">
                <div className="contenedor__elemento_eliminar">
                  <span className="contenedor__elemento_valor" title={`-${formatoMoneda(item?.valor)}`}>
                    -{formatoMoneda(item?.valor)}
                  </span>
                  <span className="contenedor__elemento_porcentaje" title={formatoPorcentaje(item?.valor/patrimonio.totalIngresos())}>
                    {/* {formatoPorcentaje(item?.valor/patrimonio.totalIngresos())} */}
                    {!item?.valor ?
                      '0%'
                      :
                      formatoPorcentaje(item?.valor/patrimonio.totalIngresos())
                    }
                  </span>
                  <button className='contenedor__elemento_eliminar--btn'>
                    <ion-icon name="close-circle-outline" onClick={() => eliminarEgreso(item?.id)}></ion-icon>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
