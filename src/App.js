import styles from './App.scss';
import React, { Component } from 'react';
import { TrackList, SearchBox, SoundCloudPlayer } from 'containers';

class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <SoundCloudPlayer />
        <SearchBox />
        <TrackList />
      </div>
    );
  }
}
export default App;
