import React from 'react';


class Hero extends React.Component {

  // export default class Marquee extends Component
  constructor(props) {
    super(props)
    this.state = {
      main_style: {
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#330000',
        color: 'white',
      },
      img_style: {
        width: '25%',
        align: 'center'
      },
    }
  }

  render() {
    const name = this.props.metadata.name;
    const blurb = this.props.metadata.blurb;
    return (
      <div style={this.state.main_style} className='hero'>
        <img style={this.state.img_style} src={'img/4-redLogo-TransparentBG-crop.png'}/>
        <h1>{name}</h1>
        <h2>{blurb}</h2>

      </div>
    )
  }
}

export default Hero
