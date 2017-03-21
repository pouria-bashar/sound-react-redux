import {
  SET_SELECTED_TRACK,
  SELECTED_TRACK_IS_PLAYING,
} from 'actionTypes';

const INITIAL_STATE = {
  track: {},
  isPlaying: false,
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SELECTED_TRACK:
      return {
        ...state,
        track: action.payload,
      };
    case SELECTED_TRACK_IS_PLAYING:
      return {
        ...state,
        isPlaying: action.payload,
      };
    default: return state;
  }
}
