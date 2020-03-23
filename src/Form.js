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
// input html objects and set the state of the object based on this.  The name
// is fixed for the inputs below, while the value is what the user enters

handleChange = event => {
  const { name, value } = event.target
// The [ ] brackets here are the setState synatx
  this.setState({
    [name]: value,
  })
}


  // Submit button action.  On click, use App.js's handleSubmit to append form
  // data to previous data

  submitForm = () => {
    // handleSubmit appends new data using the current state of the form
    this.props.handleSubmit(this.state)
  }

  // clears the form

  clearForm = () => {
    this.setState(this.initialState)
  }

  // Reset form to initial state.  Uses App.js's handleReset

  resetForm = () => {
    this.props.handleReset()
    this.setState(this.initialState)
  }

  // use App.js's handleUniqueToggle code

  toggleUniqueToggle = () => {
    this.props.handleUniqueToggle()
  }


  render() {
    // Define the variables the output uses in state and in props
    const { min, max, length } = this.state;
    const {uniquetoggle} = this.props;
  
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
value="Clear"
onClick={this.clearForm} />


<input 
type="button"
value="Reset"
onClick={this.resetForm} />




<label class="switch">
	<input class="switch-input" type="checkbox" onClick={this.toggleUniqueToggle} />
	<span class="switch-label" data-on="Unique Randoms" data-off="Unique Randoms"></span> 
	<span class="switch-handle"></span> 
</label>


</div>




      
    );
  }

}


export default Form;