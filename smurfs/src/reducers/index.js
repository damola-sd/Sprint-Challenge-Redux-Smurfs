import { ERROR, GET_SMURFS, ADD_SMURF, DELETE_SMURF, UPDATE_SMURF } from '../actions';
import { combineReducers } from 'redux';
/*
  Be sure to import in all of the action types from `../actions`
*/


//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState =  {
   smurfs: [],
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        error: null
      };

    case ADD_SMURF:
        return {
          ...state,
          smurfs: action.payload,
          error: null
        };

    case UPDATE_SMURF:
        return {
          ...state,
          smurfs: action.payload,
          error: null
        };
    
    case DELETE_SMURF:
        return {
          ...state,
          smurfs: action.payload,
          error: null
        };

    case ERROR:
        return {
          ...state,
          error: action.payload
        };

    default:
      return state;
  }
}

export default combineReducers({
  smurfReducer
});