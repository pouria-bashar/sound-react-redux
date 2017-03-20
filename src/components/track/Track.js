
import React, { Component, PropTypes } from 'react';
import styles from 'styled-components';

const Card = styles.div`
  border: solid 1px;
  margin: 0 5px 5px 5px;
  flex-basis: 20%;
  min-width: 200px;
  padding: 10px;
`;
const Header = styles.div`
  font-size: 16px;
  max-width: 175px;
  text-align: center;
`;
const Divider = styles.div`
  margin: 1rem 0;
  line-height: 1;
  height: 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .05em;
  color: rgba(0,0,0,.85);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  font-size: 1rem;
  border-top: 1px solid rgba(34,36,38,.15);
  border-bottom: 1px solid rgba(255,255,255,.1);
`;
const Link = styles.a`
  display: block;
  font-size: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: black;
`;
const Image = styles.img`
  margin-bottom: 20px;
`;

const PlaybackButton = styles.button`
  position: relative;
  width: 100%;
  background: #2399d4;
`;
class Track extends Component {
  static propTypes = {
    track: PropTypes.object.isRequired,
  }
  handleClick() {
    const { track } = this.props;

  }
  render() {
    const { track } = this.props;

    return (
      <Card>
        <Header>
          <Image src={track.artwork_url} />
          <Link href={track.artwork_url}>{track.title}</Link>
        </Header>
        <Divider />
        <PlaybackButton onClick={::this.handleClick}>Play</PlaybackButton>
      </Card>
    );
  }
}

export default Track;
