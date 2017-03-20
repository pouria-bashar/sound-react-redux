import React, { Component } from 'react';
import styles from 'styled-components';
import { connect } from 'react-redux';
import { getTracks } from 'actions';
import { Dimmer, Loader } from 'semantic-ui-react'

const Container = styles.form`
  margin: 40px auto;
  text-align:center;
`;
const TextBox = styles.input`
  width: 40%;
`;
const SearchButton = styles.button`
    margin-Left: 10px;
`;
class SearchBox extends Component {
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
        <TextBox
          name="searchTerm"
          onChange={::this.handleChange}
        />
        <SearchButton type="submit">Search</SearchButton>
        {tracks.isLoading && ::this.renderLoading()}
      </Container>
    );
  }
}
function mapStateToProps({ tracks }) {
  return { tracks };
}
export default connect(mapStateToProps, { getTracks })(SearchBox);
