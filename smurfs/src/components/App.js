import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import { connect } from "react-redux";
import { getSmurfs, deleteSmurf, addSmurf, updateSmurf } from '../actions'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <Smurfs smurfs = {this.props.smurfs} delete = {this.props.deleteSmurf}/>
        <SmurfForm update = {this.props.updateSmurf} add = {this.props.addSmurf} />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    smurfs: state.smurfReducer.smurfs,
    error: state.smurfReducer.error    
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, deleteSmurf, addSmurf, updateSmurf }
)(App);

