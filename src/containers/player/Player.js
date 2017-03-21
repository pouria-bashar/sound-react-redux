import React, { Component, PropTypes } from 'react';
import styles from 'styled-components';
import { selectedTrackIsPalying } from 'actions';
import { connect } from 'react-redux';

const Container = styles.div`
  position: fixed;
  bottom:0;
  width: 100%;
  height: 77px;
  background-color: #333;
`;
const Inputs = styles.div`
  margin: 0 auto;
  text-align: center;
  padding: 20px;
`;
class Player extends Component {
  static propTypes = {
    selectedTrack: PropTypes.object.isRequired,
  };
  componentDidUpdate() {
    const { selectedTrack } = this.props;
    if (selectedTrack.isPlaying) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  render() {
    const { selectedTrack: { track } } = this.props;
    return (
      <Container>
        <Inputs>
          <button>Play</button>
          <button>Pause</button>
        </Inputs>
        <audio ref={(c) => { this.audio = c; }} src={`${track.stream_url}?client_id=e582b63d83a5fb2997d1dbf2f62705da`} id="audio" />
      </Container>
    );
  }
}
function mapStateToProps({ selectedTrack }) {
  return { selectedTrack }
}
export default connect(mapStateToProps, { selectedTrackIsPalying })(Player);
