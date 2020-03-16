import React, { Component } from 'react'

class RandGenerator extends Component {

  constructor(props) {
    super(props)

    this.initialState = {
      min: '',
      max: '',
      total: '',
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

  submitRandGenerator = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }


  render() {
    const { min, max, total } = this.state;
  
    return (
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



        <label for="total">Total</label>
        <input
          type="number"
          name="total"
          id="total"
          value={total}
          onChange={this.handleChange} />

          {/* Submit Button */}

        <input 
          type="button"
          value="Submit"
          onClick={this.submitRandGenerator} />
      </form>
    );
  }

}


export default RandGenerator;