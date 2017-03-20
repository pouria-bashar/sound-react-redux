import {
GET_TRACKS_STARTED,
GET_TRACKS_COMPLETED,
GET_TRACKS_FAILED,
SET_SELECTED_TRACK,
} from 'actionTypes';

import SoundCloudApiClinet from 'utils/http_client/SoundCloudApiClinet';

const client = new SoundCloudApiClinet();

export function setSelectedTrack(id) {
  return dispatch => {
    dispatch({ type: SET_SELECTED_TRACK, payload: id });
  };
}
export function getTracks(q = '') {
  return async dispatch => {
    dispatch({ type: GET_TRACKS_STARTED });
    try {
      const response = await client.getTracks(q);
      dispatch({ type: GET_TRACKS_COMPLETED, payload: response.data });
      dispatch({ type: SET_SELECTED_TRACK, payload: response.data[0].id });
    } catch (error) {
      dispatch({ type: GET_TRACKS_FAILED, error: error.message });
    }
  };
}
