import React, { useContext } from 'react'
import './Negyzet.css'
import { KattContext } from '../context/KattContext'

function Negyzet(props) {
  const {kattintas, nyertes} = useContext(KattContext)

  const foglalt = props.jel && props.jel !== ' '

  function kezeles() {
    if (nyertes) return;
    if (foglalt) return;
    kattintas(props.index)
  }

  return (
    <div
      className={`negyzet ${foglalt ? 'foglalt' : 'ures'}`}
      onClick={kezeles}
      role="button"
      aria-label={`Mező ${props.index}`}
    >
        {props.jel}
    </div>
  )
}

export default Negyzet
