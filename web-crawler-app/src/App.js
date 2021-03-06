import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import UserInputForm from './components/UserInputForm';
import Chart from './components/Chart';
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';
// import { getLinks } from './Api';

class App extends Component {
  state = {
    chart: false,
    show: true,
    url: '',

    links: {
      working: ['/#page - top', '/oranges.html', '/salmon.html'],
      notWorking: ['/plums.html', '/mango.html']
    }
  };
  render() {

    return (
      <div className="App">
        <Header />
        <br />
        <UserInputForm changeState={this.changeState} getUrl={this.getUrl} />
        {this.state.show && <Loading show={this.state.show} color="red" />}
        {this.state.chart && <Chart links={this.state.links} />}
      </div>
    );
  }

  changeState = () => {
    this.setState({ chart: true, show: false });
  };

  getUrl = (url) => {
    this.setState({ url: url });
    // getLinks(url).then((result) => {
    //   console.log(result);
    //   this.setState({ linkArray: result });
    // });
  };
}

export default App;
