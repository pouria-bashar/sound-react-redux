import React, { Component, PropTypes } from 'react';
import styles from 'styled-components';
import { selectedTrackIsPalying } from 'actions';
import { connect } from 'react-redux';

const Container = styles.div`
  position: fixed;
  bottom:0;
  width: 100%;
  height: 77px;
  background-color: rgb(113, 111, 111);
`;
const Wrapper = styles.div`
  margin: 0 auto;
  text-align: center;
  display: flex;
  width: 900px;
`;
const Image = styles.img`
  margin-right: 20px;
`;
class Player extends Component {
  static propTypes = {
    selectedTrack: PropTypes.object.isRequired,
  };
  componentDidUpdate() {
    if (!this.audio) return;
    const { selectedTrack } = this.props;
    if (selectedTrack.isPlaying) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  render() {
    const { selectedTrack: { track } } = this.props;
    if (!track) return null;
    return (
      <Container>
        <Wrapper>
          <Image src={track.artwork_url} />
        </Wrapper>
        <audio ref={(c) => { this.audio = c; }} src={`${track.stream_url}?client_id=e582b63d83a5fb2997d1dbf2f62705da`} id="audio" />
      </Container>
    );
  }
}
function mapStateToProps({ selectedTrack }) {
  return { selectedTrack }
}
export default connect(mapStateToProps, { selectedTrackIsPalying })(Player);
