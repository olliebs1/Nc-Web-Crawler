import React, { Component } from 'react'

export default class UserInputForm extends Component {

  state = {
    url: ''
  }

  handleClick = (event) => {
    event.preventDefault()
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({ url: event.target.value })
  }

  render() {

    console.log(this.state)

    return (
      <div>
        <form >
          Url Input: <input type='text' onChange={this.handleChange}></input>
          <button onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    )
  }
}
