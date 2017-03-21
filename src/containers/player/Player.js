import React, { Component, PropTypes } from 'react';
import styles from 'styled-components';
import { selectedTrackIsPalying } from 'actions';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

const Container = styles.div`
  position: fixed;
  bottom:0;
  width: 100%;
  height: 150px;
  background: #1b1c1d;
`;

class Player extends Component {
  static propTypes = {
    selectedTrack: PropTypes.object.isRequired,
  };
  componentDidUpdate() {
    if (!this.soundCoudFrame) return;
    const { selectedTrack } = this.props;

    const widget = window.SC.Widget(this.soundCoudFrame);
    if (selectedTrack.isPlaying) {
      widget.play();
    } else {
      widget.pause();
    }
  }

  render() {
    const { selectedTrack: { track } } = this.props;
    if (isEmpty(track)) return null;

    return (
      <Container>
        <iframe
          width="100%"
          height="150"
          scrolling="no"
          frameBorder="no"
          onLoad={() => (console.log('Loaded'))}
          ref={(c) => { this.soundCoudFrame = c; }}
          src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.id}&amp;color=0066cc&auto_play=true`}
        />
      </Container>
    );
  }
}
function mapStateToProps({ selectedTrack }) {
  return { selectedTrack };
}
export default connect(mapStateToProps, { selectedTrackIsPalying })(Player);
