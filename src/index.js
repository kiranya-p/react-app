import React from 'react';
import ReactDOM from 'react-dom';


class Truck extends React.Component {
 
  handleSubmit(event) {
    alert('You have selected a Truck');
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Pick a truck :
        <select>
          <option value ="truck1"> Truck1</option>
          <option value ="truck2"> Truck2</option>
          <option value ="truck3"> Truck3</option>
          <option value ="truck4"> Truck4</option>
        </select>
      <br/>
      <br/>
      <br/>
      <br/>
       Pick a location :
       <select>
         <option value ="minnesota"> Minnesota</option>
         <option value ="michigan"> Michigan</option>
         <option value ="wisconsin"> Wisconsin</option>
         <option value ="illinois"> Illinois</option>
       </select>
       <br/>
       <br/>
       <br/>
       <br/>
       <input type="submit" value="submit" />
     </label>
     </form>
    );
  }
}

ReactDOM.render(
  <Truck name ="Truck" name2 ="Information" />,
  document.getElementById('root')
)