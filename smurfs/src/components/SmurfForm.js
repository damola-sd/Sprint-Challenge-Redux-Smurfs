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
  

  
  render() {
    return (
      <div className="SmurfForm">
        <StyledForm onSubmit={this.addSmurf}>
          <input
            placeholder="name"
            name="name"
          />
          <input
            placeholder="age"
            name="age"
          />
          <input
            placeholder="height"
            name="height"
          />
          <button type="submit">Add to the village</button>
        </StyledForm>
      </div>
    );
  }
}

export default SmurfForm;
