import React, { Component } from 'react';


class Hero extends React.Component {

  // export default class Marquee extends Component
  constructor(props) {
    super(props)
    this.state = {
      main_style: {
        width: "100%",
        textAlign: "center",
        backgroundColor: "#330000",
        color: "white",
      },
      img_style: {
        width: "25%",
        align: "center"
      },
    }
  }

  render() {
    var { name, blurb } = this.props.metadata;

    return (
      <div style={this.state.main_style} className="hero">
        <img style={this.state.img_style} src={"/build/img/4-redLogo-TransparentBG-crop.png"}/>
        <h1>{name}</h1>
        <h2>{blurb}</h2>

      </div>

      // <Container className="ui fluid inverted vertical masthead center aligned segment">
      //   <Grid columns={2}>
      //     <Grid.Column >
      //       <Image floated="right" shape="rounded" size="medium" src={"/build/img/4-redLogo-TransparentBG-crop.png"}/>
      //     </Grid.Column>
      //     <Grid.Column className="marquee-text" verticalAlign="middle">
      //       <Header className="siteTitle" as="h1" inverted>
      //         {name}
      //         <Header.Subheader className="blurb">
      //           {blurb}
      //         </Header.Subheader>
      //       </Header>
      //     </Grid.Column>
      //   </Grid>
      // </Container>
    )
  }
}

export default Hero
