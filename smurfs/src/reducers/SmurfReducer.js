import {
  FETCH_SMURF_DATA_START,
  FETCH_SMURF_DATA_SUCCESS,
  FETCH_SMURF_DATA_FAILURE,
  UPDATE_SMURF
} from '../actions';

const initialState = {
  smurfs: [],
  update: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_DATA_START:
      return { ...state };

    case FETCH_SMURF_DATA_SUCCESS:
      console.log('action payload', action.payload);

      return { ...state, smurfs: action.payload,
        update: !state.update };

    case FETCH_SMURF_DATA_FAILURE:
      console.log('failure', action.payload);
      return { ...state };

    case UPDATE_SMURF:
      return { ...state, update: !state.update };

    default:
      return state;
  }
};
