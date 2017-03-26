import React from 'react';

class Hero extends React.Component {
  // export default class Marquee extends Component
  constructor(props) {
    super(props)
    this.styles = {
      img: {
        width: '100%',
        height: 'auto'
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

      }
    }

    var styles = this.styles

    this.state = {
      logo: 'img/4-redLogo-TransparentBG-crop.png',
      hero: {
        position: 'fixed',
        zIndex: 100,
        top: '2em',
        right: '2em',
        width: '20em',
        color: '#333',
      },
      org: {
        marginBottom: '0em',
      },
      img: styles.img,
      info: {
        paddingLeft: '7em'
      }
    }
  }

  render() {
    const name = this.props.metadata.name;
    const blurb = this.props.metadata.blurb;
    return (
      <div style={this.state.hero} className='hero'>
        <h1 style={this.state.org} className='fn org'>
          <img style={this.state.img} src={this.state.logo}/>
          <span style={this.styles.offscreen}>{name}</span>
        </h1>
        <div style={this.state.info} className="info">

          <h2 style={this.styles.description} className="description">{blurb}</h2>
        </div>

      </div>
    )
  }
}

export default Hero
