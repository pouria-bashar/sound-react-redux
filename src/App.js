import React, { Component } from 'react';
import { TrackList, SearchBox, Player } from 'containers';
import styles from 'styled-components';

const Content = styles.section`
  margin: 90px auto;
  max-width: 900px;
`;
class App extends Component {

  render() {
    return (
      <div>
        <Content>
          <SearchBox />
          <TrackList />
        </Content>
        <Player />
      </div>
    );
  }
}
export default App;
