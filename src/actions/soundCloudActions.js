import {
GET_TRACKS_STARTED,
GET_TRACKS_COMPLETED,
GET_TRACKS_FAILED,
} from 'actionTypes';

import SoundCloudApiClinet from 'utils/http_client/SoundCloudApiClinet';

const client = new SoundCloudApiClinet();

export function getTracks(q) {
  return async dispatch => {
    dispatch({ type: GET_TRACKS_STARTED });
    try {
      const response = await client.getInitialTracks();
      dispatch({ type: GET_TRACKS_COMPLETED, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_TRACKS_FAILED, error: error.message });
    }
  };
}
