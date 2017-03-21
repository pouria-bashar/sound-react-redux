import {
GET_TRACKS_STARTED,
GET_TRACKS_COMPLETED,
GET_TRACKS_FAILED,
SET_SELECTED_TRACK,
SELECTED_TRACK_IS_PLAYING,
} from 'actionTypes';

import SoundCloudApiClinet from 'utils/http_client/SoundCloudApiClinet';

const client = new SoundCloudApiClinet();

export function setSelectedTrack(track) {
  return dispatch => {
    dispatch({ type: SET_SELECTED_TRACK, payload: track });
  };
}
export function selectedTrackIsPalying(isPalying) {
  return dispatch => {
    dispatch({ type: SELECTED_TRACK_IS_PLAYING, payload: isPalying });
  };
}
export function getTracks(q = '') {
  return async dispatch => {
    dispatch({ type: GET_TRACKS_STARTED });
    try {
      const response = await client.getTracks(q);
      dispatch({ type: GET_TRACKS_COMPLETED, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_TRACKS_FAILED, error: error.message });
    }
  };
}
