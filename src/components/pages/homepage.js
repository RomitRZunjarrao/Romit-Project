import React, { Component } from 'react';



class Homepage extends Component {
  render() {
    return (
      <div className="item1">
      <p id="opening">
       <h1>Three Top tier Processor Manufactoring companies :</h1>
      </p>

<a href="./blog1"><img src={require('./AMD.jpg')} width='200' height='170' alt=''/></a>
<a href="./blog1"><img src={require('./Intel2.png')} width='200' height='170' alt=''/></a>
<a href="./blog1"><img src={require('./nvidia.png')} width='200' height='170' alt=''/></a>


      </div>
    );
  }
}

export default Homepage;
