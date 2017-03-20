import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getTracks, setSelectedTrack } from 'actions';
import styles from 'styled-components';
import { Track } from 'components';

const Container = styles.div`
  display: flex;
  flex-wrap: wrap;
`;
const NotFoundContainer = styles.div`
  color: tomato;
`;


class TrackList extends Component {
  static propTypes = {
    tracks: PropTypes.object.isRequired,
    setSelectedTrack: PropTypes.func.isRequired,
    getTracks: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getTracks();
  }
  handleClick(id) {
    this.props.setSelectedTrack(id);
  }
  render() {
    const { tracks: { items } } = this.props;
    if (!items) return null;
    if (items.length < 1) {
      return (
        <NotFoundContainer>
          Could not find any matching results
        </NotFoundContainer>
      );
    }
    return (
      <Container>
        {
          items.map((item, index) => <Track track={item} key={index} onClick={::this.handleClick} />)
        }
      </Container>
    );
  }
}
function mapStateToProps({ tracks }) {
  return { tracks };
}
export default connect(mapStateToProps, { getTracks, setSelectedTrack })(TrackList);
