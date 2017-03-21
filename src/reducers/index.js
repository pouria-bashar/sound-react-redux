import { combineReducers } from 'redux';
import tracks from './tracks';
import selectedTrack from './selectedTrack';

export default combineReducers({
  tracks,
  selectedTrack,
});
