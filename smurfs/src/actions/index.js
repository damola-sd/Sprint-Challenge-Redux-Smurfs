import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GET_SMURFS = 'GET_SMURFS';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR = 'ERROR';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/


export const getSmurfs = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({
        type: GET_SMURFS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err.message
      })
    });
}

export const addSmurf = smurf => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({
        type: ADD_SMURF,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err.message
      })
    });
}

export const updateSmurf = (id, friend) => dispatch => {
  axios
    .put("http://localhost:3333/smurfs/" + id, friend)
    .then(res => {
      dispatch({
        type: UPDATE_SMURF,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err.message
      })
    });
}


export const deleteSmurf = id => dispatch => {
  axios
    .delete("http://localhost:3333/smurfs/" + id )
    .then(res =>  {
      dispatch({
        type: DELETE_SMURF,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.message);
      dispatch({
        type: ERROR,
        payload: err.message
      })
    });
}