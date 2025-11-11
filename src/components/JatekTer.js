import React from 'react'
import Negyzet from './Negyzet'

function JatekTer(props) {

  return (
    <>
      {props.lista.map((jel,i)=>{
          return <Negyzet jel={jel} key={i} index={i}/>
      })}
    </>
  )
}

export default JatekTer