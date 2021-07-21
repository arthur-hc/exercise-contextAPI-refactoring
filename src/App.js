import React, { Component } from 'react';
import './App.css';
import Cars from './Cars';

export const CarContext = React.createContext();

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
  }

  moveCar = (car, side) => {
    this.setState((previus) => ({
      cars: {
        ...previus.cars,
        [car]: !side
      }
    }))
  };
  
  render() {
    const contextValue = {
      cars: {...this.state.cars},
      moveCar: this.moveCar,
    }
    return (
      <CarContext.Provider value={contextValue}>
        <Cars />
      </CarContext.Provider>
      
    );
  }
}

export default App;

