import React, { Component, PropTypes } from 'react';
import styles from 'styled-components';
import { connect } from 'react-redux';
import { getTracks } from 'actions';
import { Dimmer, Loader, Button, Input } from 'semantic-ui-react';

const Container = styles.form`
  margin: 40px auto;
  text-align:center;
`;

class SearchBox extends Component {
  static propTypes = {
    tracks: PropTypes.object.isRequired,
  }
  handlesubmit(event) {
    event.preventDefault();
    if (this.state.searchTerm === '') return;
    const { getTracks } = this.props;
    getTracks(this.state.searchTerm);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  renderLoading() {
    return (
      <Dimmer active>
        <Loader />
      </Dimmer>
    );
  }
  render() {
    const { tracks } = this.props;
    return (
      <Container onSubmit={::this.handlesubmit}>
        <Input
          style={{ width: '39%', marginRight: '10px' }}
          icon="search"
          placeholder="Search..."
          name="searchTerm"
          onChange={::this.handleChange}
        />
        <Button style={{ width: '10%' }} type="submit" primary>Search</Button>
        {tracks.isLoading && ::this.renderLoading()}
      </Container>
    );
  }
}
function mapStateToProps({ tracks }) {
  return { tracks };
}
export default connect(mapStateToProps, { getTracks })(SearchBox);
