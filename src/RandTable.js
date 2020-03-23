import React, { Component } from 'react'



class RandTable extends Component {
    render() {
      // inherits various things from from App.js as props
      const { input, deleteRow, uniquetoggle } = this.props
      // returns unique or non-
      if (uniquetoggle) {
  
      return (
        <table>
          <TableHeader />
          {/* Why isn't {this.deleteRow} needed here? I think because we've defined both above? */}
          <TableBodyUnique input={input} deleteRow={deleteRow} uniquetoggle={uniquetoggle} />
        </table>
      )
      } else {
        return (
          <table>
            <TableHeader />
            {/* Why isn't {this.deleteRow} needed here? I think because we've defined both above? */}
            <TableBody input={input} deleteRow={deleteRow} uniquetoggle={uniquetoggle} />
          </table>
        )
      }
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

// Table body for non-unique random strings



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



// Take the input and create an array which keeps min and max data and additionally
// has a string of random numbers between these values of desired length

const randarray=props.input.map((x1) => ({min: x1.min,max: x1.max,rand: randlist(x1.length, x1.min,x1.max)}))

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

// Table body for unique random strings


const TableBodyUnique = props => {


  // Take min, max, length data and turn it into min, max, random string data
  
   // output integer between xmin and xmax:
  
   function randminmax(xmin,xmax) {
    return Math.round(Math.random()*(Math.abs(Number(xmax)-Number(xmin))))+Number(xmin)
  }
  
  // Create an array of n *unique* random integers between xmin and xmas
  
  function randlistunique(n,xmin,xmax) {
    var i;
    var l = [];
    var x;
    if (n>xmax-xmin+1) {
      return "Error: Length too long for range"
    } else {
  
    for (i=0; i<n;i++) {
      x = randminmax(xmin,xmax)
      while (l.includes(x)) {
        x = randminmax(xmin,xmax)
      } 
  
        l.push(x)
      
    }
    var lstring 
    lstring=l.toString();
    return lstring
  }
  }
  
     
  
  // Same as randarray, but only generates unique elements in the randomized list
  const randarrayunique=props.input.map((x1) => ({min: x1.min,max: x1.max,rand: randlistunique(x1.length, x1.min,x1.max)}))
  
  
  // same for unique randoms
  
  const rowsunique = randarrayunique.map((x1, x2) => {
  
  
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
  
    return  <tbody>{rowsunique}</tbody>
  
    }



export default RandTable