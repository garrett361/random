import React, {Component} from 'react'
import RandTable from './RandTable'
import Form from './Form'







class App extends Component {

// 'input' is a list which will contain all saved input data. we will turn the input data into output data  Initially blank
// uniquetoggle is either 0 or 1 (true, false) and controls whether output of random number strings
// gives unique strings or not

  state = {
    input: [],
    uniquetoggle: 0,
  }

  
 



// Code for handling the submit button and appending new data to input list

handleSubmit = x => {
  this.setState({input:[...this.state.input,x]})
}

// Code for handling the reset button

handleReset = () => {
  this.setState({input:[]})
}

// Code for toggling unique random strings

 handleUniqueToggle = () =>{
   this.setState({uniquetoggle: (this.state.uniquetoggle+1)%2 })
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
    //define input and uniquetoggle, so they can be accessed by Form and RandTable
    const { input, uniquetoggle } = this.state

//  When calling RandTable, for instance, if we want it to have access to the
// input data, we need to give it the data as in the below. By input={input}, we
// mean that when input is called in RandTable it will refer to the input js data
// defined above in App.js; the {} are needed because index is a js element
// Instead, because deleteRow is a function, in order to call it we have this.deleteRow
// on the RHS, because ...?s
// I think the this.xxx's are needed because these methods are not defined within the Form
// and RandTable classes themselves, instead they need to inherit them?
    return (
      <div className="container">
        <h1>Random Number String Generator</h1>
        <Form handleSubmit={this.handleSubmit} handleReset={this.handleReset} handleUniqueToggle={this.handleUniqueToggle} uniquetoggle={uniquetoggle} />
        <RandTable input={input} deleteRow={this.deleteRow} uniquetoggle={uniquetoggle} />
      </div>
    )
  }

}




  export default App;
