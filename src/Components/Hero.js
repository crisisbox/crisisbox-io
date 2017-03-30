import Radium from 'radium';
import React from 'react';

class Hero extends React.Component {
  // export default class Marquee extends Component
  constructor(props) {
    super(props)
    this.state = {
      logo: 'img/4-redLogo-TransparentBG-crop.png',
    }
  }

  render() {
    const name = this.props.metadata.name;
    const blurb = this.props.metadata.blurb;
    return (
      <div style={styles.hero} className='hero'>
        <h1 style={styles.org} className='fn org'>
          <img style={styles.img} src={this.state.logo}/>
          <span style={styles.offscreen}>{name}</span>
        </h1>
        <div style={styles.info} className="info">

          <h2 style={styles.description} className="description">{blurb}</h2>
          <a href="https://github.com/crisis-box">{this.props.metadata.repository}</a>
        </div>

      </div>
    )
  }
}

var styles = {
  hero: {
    position: 'absolute',
    zIndex: 100,
    width: '3em',
    color: '#333',
    left: '50%',
    transform: 'translateX(-50%)',
    '@media screen and (min-width: 960px)': {
      position: 'fixed',
      width: '17em',
      top: '2em',
      left: 'auto',
      right: '2em',
      transform: 'none'
    }
  },
  org: {
    marginBottom: '0em'
  },
  info: {
    paddingLeft: '2.5em',
    '@media screen and (max-width: 960px)': {
      position: 'fixed',
      top: '-3000px',
      left: '-12000px',
      height: 0,
      width: 0,
      overflow: 'hidden'
    }
  },
  img: {
    transitionProperty: 'width, height',
    transitionDuration: '0.25s',
    transitionTimingFunction: 'ease-out',
    height: '1.75em',
    width: 'auto',
    '@media screen and (min-width: 960px)': {
      width: '100%',
      height: 'auto',
    }
  },
  offscreen: {
    position: 'fixed',
    top: '-3000px',
    left: '-12000px',
    height: 0,
    width: 0,
    overflow: 'hidden'
  },
  description: {
    marginTop: 0,
    maxWidth: '6em'
  },

}

export default Radium(Hero)
