import {
  SET_SELECTED_TRACK,
} from 'actionTypes';

const INITIAL_STATE = {
  id: 0,
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SELECTED_TRACK:
      return {
        ...state,
        id: action.payload,
      };
    default: return state;
  }
}
