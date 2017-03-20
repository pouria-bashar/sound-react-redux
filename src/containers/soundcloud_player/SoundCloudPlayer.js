import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react'
import styles from 'styled-components';

const Container = styles.div`

`;
class SoundCloudPlayer extends Component {
  static propTypes = {
    selectedTrack: PropTypes.object.isRequired,
  }
  state = {
    isLoading: false,
  }
  componentWillReceiveProps() {
    this.setState({ isLoading: true });
  }
  renderLoading() {
    return (
      <Dimmer active>
        <Loader />
      </Dimmer>
    );
  }
  render() {
    const { selectedTrack: { id } } = this.props;
    if (id === 0) return null;

    const url = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&amp;color=0066cc`;
    return (
      <Container>
        {this.state.isLoading && ::this.renderLoading() }
        <iframe
          onLoad={() => { this.setState({ isLoading: false }); }}
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          src={url}
        />
      </Container>
    );
  }
}
function mapStateToProps({ selectedTrack }) {
  return { selectedTrack };
}
export default connect(mapStateToProps)(SoundCloudPlayer);
