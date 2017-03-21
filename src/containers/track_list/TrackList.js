import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getTracks, setSelectedTrack, selectedTrackIsPalying } from 'actions';
import styles from 'styled-components';
import { Track } from 'components';

const Container = styles.div`

`;
const NotFoundContainer = styles.div`
  color: tomato;
`;
const Row = styles.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &:last-child{
    
  }
`;

class TrackList extends Component {
  static propTypes = {
    tracks: PropTypes.object.isRequired,
    selectedTrack: PropTypes.object.isRequired,
    setSelectedTrack: PropTypes.func.isRequired,
    selectedTrackIsPalying: PropTypes.func.isRequired,
    getTracks: PropTypes.func.isRequired,
  }
  componentDidMount() {
    this.props.getTracks();
  }
  handlePlayClick(track) {
    this.props.setSelectedTrack(track);
    this.props.selectedTrackIsPalying(true);
  }
  handlePauseClick() {
    this.props.selectedTrackIsPalying(false);
  }
  render() {
    const { tracks: { items }, selectedTrack } = this.props;
    if (!items) return null;
    if (items.length < 1) {
      return (
        <NotFoundContainer>
          Could not find any matching results
        </NotFoundContainer>
      );
    }
    const itemsCopy = items.slice(0);
    const rows = [];
    const size = 4;
    while (itemsCopy.length > 0) rows.push(itemsCopy.splice(0, size));

    return (
      <Container>
        {
          rows.map((row, index) => (
            <Row key={index}>
              {
                row.map(item => (
                  <Track
                    track={item}
                    key={item.id}
                    onPlayClick={::this.handlePlayClick}
                    onPauseClick={::this.handlePauseClick}
                    isPlaying={selectedTrack.isPlaying && selectedTrack.track.id === item.id}
                  />
                ))
              }
            </Row>
          ))
        }
      </Container>
    );
  }
}
function mapStateToProps({ tracks, selectedTrack }) {
  return { tracks, selectedTrack };
}
export default connect(mapStateToProps, { getTracks, setSelectedTrack, selectedTrackIsPalying })(TrackList);
