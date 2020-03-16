import React, { Component } from 'react'



class RandTable extends Component {
    render() {
      const { inputData, deleteRow } = this.props
  
      return (
        <table>
          <TableHeader />
          <TableBody inputData={inputData} deleteRow={deleteRow} />
        </table>
      )
    }
  }


  // Static table header


const TableHeader = () => {
  return (
      <thead>
          <tr>    
            <th>Min</th>
            <th>Max</th>
            <th>Output</th>
          </tr>
      </thead>
  )
}





const TableBody = props => {



// Take min, max, length data and turn it into min, max, random string data

 // output integer between xmin and xmax:

 function randminmax(xmin,xmax) {
  return Math.round(Math.random()*(Math.abs(Number(xmax)-Number(xmin))))+Number(xmin)
}


// Create an array of n random integers between xmin and xmas

      function randlist(n,xmin,xmax) {
        var i
        var l = [];
        for (i=0; i<n;i++) {
          l.push(randminmax(xmin,xmax))
        }
        var lstring 
        lstring=l.toString();
        return lstring
      }

   


// Take the inputData and create an array which keeps min and max data and additionally
// has a string of random numbers between these values of desired length

    const randarray=props.inputData.map((x1) => ({min: x1.min,max: x1.max,rand: randlist(x1.length, x1.min,x1.max)}))


// Create rows showing the min, max, and random ouputs


  const rows = randarray.map((x1, x2) => {


    return (
      <tr key={x2}>
        <td>{x1.min}</td>
        <td>{x1.max}</td>
        <td>{x1.rand}</td>
        <td>
        <button onClick={() => props.deleteRow(x2)}>Delete</button>
        </td>
      </tr>
    )
  })

  
    return  <tbody>{rows}</tbody>
  }



export default RandTable