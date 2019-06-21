import React, { Component } from 'react';
import Axios from 'axios';
// import smurfServer from '../App';
import styled from 'styled-components';


const smurfServer = 'http://localhost:3333/smurfs';

const StyledForm = styled.form`
  input {
    padding: 10px;
    margin: 10px;
    border-radius: 10px;

  }

  button {
    padding: 10px;
    margin: 10px;
    border-radius: 20px;
    background-color: goldenrod;
    cursor: pointer;
  }
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.idRef = React.createRef();
    this.nameRef = React.createRef();
    this.ageRef = React.createRef();
    this.heightRef = React.createRef();
  }

  
  render() {
    return (
      <div className="SmurfForm">
        <StyledForm onSubmit={() => {
          let newSmurf = {
            name: this.nameRef.current.value,
            age: this.ageRef.current.value,
            height: this.heightRef.current.value
          }
          if (this.idRef.current.value === ''){
            this.props.add(newSmurf);
          } else {
            let id = this.idRef.current.value;
            this.props.update(id, newSmurf);
          }
        }}>
        <input
            ref ={this.idRef}
            placeholder="ID"
            name="id"
          />
          <input
            ref ={this.nameRef}
            placeholder="Name"
            name="name"
          />
          <input
            ref = {this.ageRef}
            placeholder="Age"
            name="age"
          />
          <input
            ref = {this.heightRef}
            placeholder="Height"
            name="height"
          />
          <button type="submit">Add / Update</button>
        </StyledForm>
      </div>
    );
  }
}

export default SmurfForm;
