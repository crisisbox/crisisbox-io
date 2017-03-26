import React from 'react';

class Hero extends React.Component {
  // export default class Marquee extends Component
  constructor(props) {
    super(props)
    this.styles = {
      main: {},
      img: {
        width: 'auto',
        height: '30em'
      }
    }

    var styles = this.styles

    this.state = {
      logo: 'img/4-redLogo-TransparentBG-crop.png',
      id: {
        position: 'absolute',
        top: '2em',
        right: '2em',
        width: '30em',
        color: '#333',
      },
      main: styles.main,
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
      <div style={this.state.main} className='hero'>
        <div style={this.state.id} className='id'>
          <img style={this.state.img} src={this.state.logo}/>
          <div style={this.state.info} className="info">
            <h1 className='fn org'>{name}</h1>
            <h2 className='description'>{blurb}</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
