import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import UserInputForm from "./components/UserInputForm";
import Chart from "./components/Chart";
import Loading from "react-loading-bar";
import "react-loading-bar/dist/index.css";
import { getLinks, getStatusCodes } from "./Api";

class App extends Component {
  state = {
    chart: false,
    show: true,
    url: "",
    linkArray: [],
    brokenLinks: []
  };
  render() {
    console.log(this.state.url);
    return (
      <div className="App">
        <Header />
        <br />
        <UserInputForm changeState={this.changeState} getUrl={this.getUrl} />
        {this.state.show && <Loading show={this.state.show} color="red" />}
        {this.state.chart && <Chart />}
      </div>
    );
  }

  changeState = () => {
    this.setState({ chart: true, show: false });
  };

  getUrl = url => {
    this.setState({ url: url });
    getLinks(url).then(result => {
      console.log(result);
      this.setState({
        linkArray: [
          "https://broken-links-api.herokuapp.com/oranges.html",
          "https://broken-links-api.herokuapp.com/guava.html"
        ]
      });
    });
  };

  componentDidUpdate(prevState, prevProps) {
    if (prevState.linkArray !== this.state.linkArray) {
      this.state.linkArray.forEach(link => {
        getStatusCodes(link);
      });
    }
  }
}

export default App;
