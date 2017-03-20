import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getTracks } from 'actions';
import styles from 'styled-components';
import { Track } from 'components';

const Container = styles.div`
  display: flex;
  flex-wrap: wrap;
`;

class TrackList extends Component {
  static propTypes = {
    tracks: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.getTracks();
  }
  render() {
    const { tracks: { items } } = this.props;
    if (!items) return null;
    return (
      <Container>
        {
          items.map((item, index) => <Track track={item} key={index} />)
        }
      </Container>
    );
  }
}
function mapStateToProps({ tracks }) {
  return { tracks };
}
export default connect(mapStateToProps, { getTracks })(TrackList);
