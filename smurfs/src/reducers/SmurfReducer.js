import {
  FETCH_SMURF_DATA_START,
  FETCH_SMURF_DATA_SUCCESS,
  FETCH_SMURF_DATA_FAILURE
} from '../actions';

const initialState = {
  smurfs: [
    {

    }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_DATA_START:
      return { ...state };

    case FETCH_SMURF_DATA_SUCCESS:
      console.log(action.payload)
      return { ...state,
        smurfs: [...state.smurfs, action.payload]

      }

  default:
  return state;
  }

};
