
import React, { Component, PropTypes } from 'react';
import styles from 'styled-components';


const Card = styles.div`
  flex-basis: 23%;
  min-width: 200px;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
  border: 1px solid rgba(34,36,38,.15);
  border-radius: .28571429rem;
  &:last-child {
    border-right: 1px solid rgba(34,36,38,.15);
  }
`;
const Header = styles.div`
  font-size: 16px;
  max-width: 100px;
  position: relative;
  margin: 0 auto;
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
  height: 100px;
  width: 100px;
`;
const Divider = styles.div`
  margin: 1rem 0;
  line-height: 1;
  height: 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .05em;
  color: rgba(0,0,0,.85);
  user-select: none;
  user-select: none;
  font-size: 1rem;
  border-top: 1px solid rgba(34,36,38,.15);
  border-bottom: 1px solid rgba(255,255,255,.1);
`;

const Overlay = styles.div`
  position: absolute;
  top: 0px;
  height: 100px;
  width: 100%;
  transition: opacity 0.3s ease;
  display: block;
  visibility: visible;
  opacity: ${props => props.showOverlay ? 1 : 0};
  background-color: rgba(0, 0, 0, 0.61);
  &:hover{
    opacity: 1;
  }
`;
const OverlayButton = styles.div`
  display: block;
  position: relative;
  top: 37%;
  width: 90%;
  margin: 0px auto 5px;
  font-size: 14px;
  text-align: center;
  color: white;
  background-color: #f56c2d;
  border: 1px solid #f56c2d;
  border-radius: 4px;
  transition: background 0.3s ease;
  cursor: pointer;
  &:hover {
    background: #c85e36;
    border: 1px solid #c85e36;
  }
`;
class Track extends Component {
  static propTypes = {
    track: PropTypes.object.isRequired,
    onPlayClick: PropTypes.func.isRequired,
    onPauseClick: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool.isRequired,
  }
  handlePlayClick() {
    const { track } = this.props;
    this.props.onPlayClick(track);
  }
  handlePauseClick() {
    this.props.onPauseClick();
  }

  render() {
    const { track, isPlaying } = this.props;
    return (
      <Card>
        <Header>
          <Image
            src={track.artwork_url || 'http://static.wixstatic.com/media/66f565_accf5eba3a454753965146f53e83ae4a.png_256'}
            alt="Smiley face"
          />
          <Overlay showOverlay={isPlaying}>
            <OverlayButton
              onClick={isPlaying ? ::this.handlePauseClick : ::this.handlePlayClick}
            >
              <p>{isPlaying ? 'Pause' : 'Play'}</p>
            </OverlayButton>
          </Overlay>
          <Link href={track.artwork_url}>{track.title}</Link>
        </Header>
        <Divider />
      </Card>
    );
  }
}

export default Track;
