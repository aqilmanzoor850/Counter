import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends React.Component {
    state = { counters: [
      {id: 1, value: 0}
  ] }
  handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters:counters})
  }
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters:counters})
  }
  render(){
    return (
      <React.Fragment>
        <Counters
          counters = {this.state.counters}
          onIncrement = {this.handleIncrement} 
          onDecrement = {this.handleDecrement}
        />
      </React.Fragment>
    );
  }
}

export default App;
