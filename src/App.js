import React, { Component } from 'react';
import Counters from './components/shopping/counters';
import NavBar from './components/shopping/navBar';
class App extends Component {
    state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counterId) => {
    console.log("on delete clicked  ", counterId);
    let list = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({
      counters: list,
    });
  };
  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({
      counters,
    });
  };
  handleIncrement = (counter) => {
    let counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index].value++;
    this.setState({
      counters,
    });
    };
    handleDecrement = (counter) => {
    let counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index].value--;
    this.setState({
      counters,
    });
    };
    render() {
        return (
            <>
                <NavBar counterCount={ this.state.counters.filter(counter=>counter.value>0).length}/>
                <Counters
                    counters={this.state.counters}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                />
            </>
        );
    }
}
 
export default App;