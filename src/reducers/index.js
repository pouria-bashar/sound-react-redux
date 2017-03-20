import { combineReducers } from 'redux';
import reducerTracks from './reducerTracks';

export default combineReducers({
  tracks: reducerTracks,
})
