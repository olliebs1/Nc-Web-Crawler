import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import UserInputForm from './components/UserInputForm';
import Chart from './components/Chart';

class App extends Component {

  state = {
    chart: false
  }
  render() {
    return (
      <div className="App" >
        <Header />
        <br></br>
        <UserInputForm changeState={this.changeState} />
        {this.state.chart && <Chart />}
      </div>
    );
  }

  changeState = () => {
    this.setState({ chart: true })
  }
}

export default App;
