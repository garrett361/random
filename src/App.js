import React, {Component} from 'react'
import RandTable from './RandTable'
import Form from './Form'


class App extends Component {

// 'input' is a list which will contain all saved input data.  Initially blank

  state = {
    input: [],
  }


// Code for handling the submit button and appending new data to input list

handleSubmit = x => {
  this.setState({input:[...this.state.input,x]})
}

// Code for handling the reset button

handleReset = x => {
  this.setState({input:[]})
}

// Code for a delete button.  Takes the input list and an index i and returns
// the input list with the i-th entry removed. It's important that input is the name used here
// not sure why; thought it's just a variable name?

deleteRow = i => {
  const { input } = this.state

  this.setState({
    input: input.filter((z, x) => {
      return x !== i
    }),
  })
}


  
  // Rendering the current input onto the table and showing the submit button
  render() {
    const { input } = this.state
  
    return (
      <div className="container">
        <h1>Random Number Generator</h1>
        <Form handleSubmit={this.handleSubmit} handleReset={this.handleReset}/>
        <RandTable inputData={input} deleteRow={this.deleteRow} />
      </div>
    )
  }

}

  export default App;