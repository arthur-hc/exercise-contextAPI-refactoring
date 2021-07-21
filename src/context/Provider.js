import React, { Component } from 'react';
import MyContext from './MyContext';

class Provider extends Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signalColor: 'red'
    }
  }
  
  moveCar = (car, side) => {
    this.setState((previus) => ({
      cars: {
        ...previus.cars,
        [car]: !side,
      }
    }))
  }

  changeSignal = (color) => {
    this.setState({
      signalColor: color,
    })
  }

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }

    const { children } = this.props;

    return (
      <MyContext.Provider value={ context }>
        {children}
      </MyContext.Provider>
    )
  }
}

export default Provider;