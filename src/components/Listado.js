// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item. *DONE*
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
import React from 'react'
import Item from './Item'
import data from "./data"


const Listado = ({method})=>{
  return (
    
    <div className='container'>
      
      {/* hacer iterar sobre data hasta que no tenga índices */}
      <Item itemData={data[0]} method={method}></Item>
      <Item itemData={data[1]} method={method}></Item>
      <Item itemData={data[2]} method={method}></Item>
    </div>
  )
}

export default Listado;