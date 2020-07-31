import React from "react";
import PropTypes from "prop-types";

class Contador extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valor: this.props.valor
    };
  }

  sumarUno() {
    this.setState({ valor: this.state.valor + 1 });
  }

  restarUno() {
    this.setState({ valor: this.state.valor - 1 });
  }

  componentDidMount() {
    console.log("Ya renderizó");
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <h3>Valor: {this.state.valor}</h3>
        <button onClick={() => this.sumarUno()}>Aumentar</button>
        <button onClick={() => this.restarUno()}>Reset</button>
      </div>
    );
  }
}

Contador.PropTypes = {
  valor: PropTypes.number
};

export default Contador;
