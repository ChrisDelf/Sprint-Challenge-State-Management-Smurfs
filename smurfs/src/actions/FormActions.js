import axios from 'axios';

export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START';
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURF_DATA_START });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        console.log('Response', res.data);
        dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: err });
      });
  };
};

export const POST_SMURF_DATA_START = 'POST_SMURF_DATA_START';
export const POST_SMURF_DATA_SUCCESS = 'POST_SMURF_DATA_SUCCESS';
export const POST_SMURF_DATA_FAILURE = 'POST_SMURF_DATA_FAILURE';

export const postData = values => {
  return dispatch => {
    dispatch({ type: FETCH_SMURF_DATA_START });
    axios
      .post(`http://localhost:3333/smurfs`, values)
      .then(res => {
        console.log('Post Request Res', res);
        dispatch({ type: POST_SMURF_DATA_SUCCESS });
      })
      .catch(err => alert('Smurf has already been made'));
  };
};

export const UPDATE_SMURF = 'UPDATE_SMURF';

export const updateSmurfs = () => {

  return{type: 'UPDATE_SMURF'}

};
