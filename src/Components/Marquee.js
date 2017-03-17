import React, { Component } from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';


class Marquee extends React.Component {

  // export default class Marquee extends Component
  constructor(props) {
    super(props)
  }

  render() {
    console.log( "»»»»»»",this.props.metadata)
    var { name, blurb } = this.props.metadata;

    return (
      <Container className="ui fluid inverted vertical masthead center aligned segment">
        <Grid columns={2}>
          <Grid.Column >
            <Image floated="right" shape="rounded" size="medium" src={"/build/img/4-redLogo-TransparentBG-crop.png"}/>
          </Grid.Column>
          <Grid.Column className="marquee-text" verticalAlign="middle">
            <Header className="siteTitle" as="h1" inverted>
              {name}
              <Header.Subheader className="blurb">
                {blurb}
              </Header.Subheader>
            </Header>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default Marquee
