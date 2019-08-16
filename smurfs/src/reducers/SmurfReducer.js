import {
  FETCH_SMURF_DATA_START,
  FETCH_SMURF_DATA_SUCCESS,
  FETCH_SMURF_DATA_FAILURE
} from '../actions';

const initialState = {
  smurfs: [
    {
      name: 'Brainey',
      age: 200,
      height: '5cm',
      id: 0
    }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_DATA_START:
      return { ...state };

  default:
  return state;
  }

};
