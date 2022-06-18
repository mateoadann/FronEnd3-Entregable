// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import React from "react";

class App extends React.Component {
  state = {
    number: 0,
  };

  sumar = () => {
    this.setState((prevState) => ({ number: prevState.number + 1 }));
  };

  render() {
    return (
      <div className="App">
        <Cabecera contador={this.state.number}></Cabecera>
        <Listado method={this.sumar}></Listado>
      </div>
    );
  }
}

export default App;