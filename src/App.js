import React, {Component} from 'react'
import Table from './Table'
import RandGenerator from './RandGenerator'

class App extends Component {

// 'characters' is a list which will contain all saved input data.  Initially blank

  state = {
    characters: [],
  }

// Code for a delete button.  Takes the character list and an index i and returns
// the character list with the i-th entry removed

  removeCharacter = index => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

// Code for handling the submit button and appending new data to characters list
  
  handleSubmit = newcharacter => {
    this.setState({characters:[...this.state.characters,newcharacter]})
  }

  // Rendering the current characters onto the table and showing the submit button
  render() {
    const { characters } = this.state
  
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <RandGenerator handleSubmit={this.handleSubmit}/>
      </div>
    )
  }

}

  export default App