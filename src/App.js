import styles from './App.scss';
import React, { Component } from 'react';
import { TrackList } from 'containers';

class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <TrackList />
      </div>
    );
  }
}
export default App;
