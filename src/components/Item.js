// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo. *DONE*

// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App. *DONE*

// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso. *DONE*
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock") *DONE*

import React, { useState } from 'react';

const Item = ({ itemData, method })=>{
  const [contador, setContador] = useState(itemData.stock === 0? "Agotado": itemData.stock);
  const [isDisabled, setDisable] = useState(contador === 0 || contador === "Agotado"? true: false);
  const [btnMensaje, setBtnMensaje] = useState(contador === 0 || contador === "Agotado"? "SIN STOCK": "COMPRAR");
  function substract() {

    if (contador >= 1) setContador(contador -1);
    if (contador === 1) setNoStock();
    
  }

  function setNoStock(){
      setDisable(true);
      setBtnMensaje("SIN STOCK");
      setContador("agotado")
  }

  return (
    <div className='producto' id={itemData.id}>
      <h3>{itemData.producto.nombre}</h3>
      <p>{itemData.producto.descripcion}</p>
      <h5>En stock: <span>{contador}</span></h5>
      <button disabled={isDisabled} onClick={() => { substract(); method(); }}>{btnMensaje}</button>
    </div>
  )
}

export default Item;