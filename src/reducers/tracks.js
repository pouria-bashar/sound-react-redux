import {
GET_TRACKS_STARTED,
GET_TRACKS_COMPLETED,
GET_TRACKS_FAILED,
} from 'actionTypes';

const INITIAL_STATE = {
  items: [],
  error: '',
  isLoading: false,
  hasFetched: false,
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TRACKS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TRACKS_COMPLETED:
      return {
        ...state,
        isLoading: false,
        error: '',
        items: action.payload,
        hasFetched: true,
      };
    case GET_TRACKS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        items: [],
        hasFetched: true,
      };
    default: return state;
  }
}
