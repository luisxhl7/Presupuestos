import React, { useEffect, useState } from 'react'
import './Header.scss'
import { Patrimonio } from '../../../js/patrimonio '
import { formatoMoneda } from '../../../js/formatos'

export const Header = ({data}) => {
  const patrimonio = new Patrimonio()
  const [totalEgresos, setTotalEgresos] = useState(0)
  const [totalIngresos, setTotalIngresos] = useState(0)
  const [saldo, setSaldo] = useState(0)
  
  useEffect(() => {
    const resultEgresos = patrimonio.totalEgresos()
    const resultIngresos = patrimonio.totalIngresos()
    const resultSaldo = patrimonio.getSaldoDisponible()
    setTotalIngresos(resultIngresos)
    setTotalEgresos(resultEgresos)
    setSaldo(resultSaldo)
  }, [data])
  

  return (
    <div className="header">
      <div className="header__presupuesto">
        <div className="header__presupuesto_titulo">
          Presupuesto Disponible
        </div>
        <div className="header__presupuesto_valor" id='presupuesto'>
          {formatoMoneda(saldo)}
        </div>
        <div className='header__presupuesto-content'>
          <div className="header__presupuesto_ingreso">
            <div className="header__presupuesto_ingreso--texto">
              Ingresos
            </div>
            <div className="derecha">
              <div className="header__presupuesto_ingreso--valor" id='ingresos'>
                +{formatoMoneda(totalIngresos)}
              </div>
              <div className="header__presupuesto_ingreso--porcentaje">
                &nbsp;
              </div>
            </div>
          </div>
          <div className="header__presupuesto_egreso">
            <div className="header__presupuesto_egreso--texto">
              Egresos
            </div>
            <div className="derecha">
              <div className="header__presupuesto_egreso--valor" id='egresos'>
                - {formatoMoneda(totalEgresos)}
              </div>
              <div className="header__presupuesto_egreso--porcentaje" id='porcentaje'>
                45%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
