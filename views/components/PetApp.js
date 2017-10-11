import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'header';
export default class PetApp extends React.Component{

  render(){
    return (
      <div>
        <h1>Pet Rescue</h1>
        <Header/>
        <Nav/>
      </div>
    )
  }
};

