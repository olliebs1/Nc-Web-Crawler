import React, { Component } from 'react';
// import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';

export default class UserInputForm extends Component {
  state = {
    url: '',
    show: false,
  };

  handleClick = (event) => {
    const { changeState, getUrl } = this.props;
    event.preventDefault();
    // this.setState({ show: true });
    changeState();
    getUrl(this.state.url);
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ url: event.target.value });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <form>
          Url Input: <input type="text" onChange={this.handleChange} />
          <button onClick={this.handleClick}>Submit</button>
        </form>
        {/* {this.state.show && <Loading show={this.state.show} color="red" /> */}
      </div>
    );
  }
}
