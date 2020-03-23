import React, { Component } from 'react'

class Form extends Component {
// I think the super(props) is used so that Form can inherit props of Component? Not sure yet.
// The "props" can also be deleted and it will work, but it seems best practice is to write props.
  constructor(props) {
    super(props)

    this.initialState = {
      min: '',
      max: '',
      length: '',
    }

    this.state = this.initialState
  }


  // Reaction of forms to input.  On change, will take the name-value pair of
// input html objects and set the state of the object based on this

handleChange = event => {
  const { name, value } = event.target

  this.setState({
    [name]: value,
  })
}


  // Submit button action.  On click, use App.js's handleSubmit to append form
  // data to previous data, then reset to initial blank state

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  // Reset form to initial state


  resetForm = () => {
    this.props.handleReset(this.state)
    this.setState(this.initialState)
  }

  // resetForm = () => {
  //   this.setState
  // }

  render() {
    const { min, max, length } = this.state;
  
    return (

      <div>
      <form>


        <label for="min">Min</label>
        <input
          type="number"
          name="min"
          id="min"
          value={min}
          onChange={this.handleChange} 
          autoFocus/>




        <label for="max">Max</label>
        <input
          type="number"
          name="max"
          id="max"
          value={max}
          onChange={this.handleChange} />



        <label for="length">Length</label>
        <input
          type="number"
          name="length"
          id="length"
          value={length}
          onChange={this.handleChange} />
          
      </form>

      <input 
type="button"
value="Submit"
onClick={this.submitForm} />


<input 
type="button"
value="Reset"
onClick={this.resetForm} />

</div>

      
    );
  }

}


export default Form;