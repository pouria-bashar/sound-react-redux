import { combineReducers } from 'redux';
import reducerTracks from './reducerTracks';
import reducerSelectedTrack from './reducerSelectedTrack';

export default combineReducers({
  tracks: reducerTracks,
  selectedTrack: reducerSelectedTrack,
});
