import React, { Component } from 'react'


// Table uses data (characterData) for what to include in its rows and had a delete button (removeCharacter)

class Table extends Component {
    render() {
      const { characterData, removeCharacter } = this.props
  
      return (
        <table>
          <TableHeader />
          <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
      )
    }
  }
  
  // The header is static:

const TableHeader = () => {
  return (
      <thead>
          <tr>    
              <th>Min</th>
              <th>Max</th>
              <th>Total</th>
          </tr>
      </thead>
  )
}

// The table's contents use the min, max, and total data (defined in RandGenerator)
// and use that as their table output
// There's also a delete button which uses App.js's removeCharacthter function


const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
  <td>{row.min}</td>
  <td>{row.max}</td>
  <td>{row.total}</td>
  <td>
    <button onClick={() => props.removeCharacter(index)}>Delete</button>
  </td>
</tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }



export default Table