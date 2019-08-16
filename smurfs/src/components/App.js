import React, { Component, useState, useEffect} from 'react';
import { connect } from 'react-redux';

import AddSmurfForm from './AddSmurfForm';
import SmurfCard from './SmurfCard';
import './App.css';

import { getData } from '../actions'

const App = props => {
  console.log("PROPS IN APP", props.update)
  const [udpates, setUpdates] = useState(false)

  useEffect(() => {
    props.getData()
    console.log("IN use Effect",props)
  }, [udpates]);

    return (
      <div className="App">
      <h1> WELCOME TO SMURF TOWN</h1>
      <AddSmurfForm />
      <button onClick = {() => setUpdates(true)}> Update </button>
      {props.smurfs.map(smurf => <SmurfCard key={smurf.id} smurf={smurf}/>)}
      </div>
    );

}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    update: state.update
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(App);
