// El componente Cabecera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

import React from 'react'

const Cabecera = ({ contador })=>{
  return (
    <header>
        <h1>Carrito de Compras</h1>
        <p>Cantidad de Productos <span>{contador}</span></p>
    </header>
  )
}

export default Cabecera;