import React, { Component } from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';

export default class Marquee extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var { name, blurb } = this.props.metadata;
    return <Container className="ui fluid inverted vertical masthead center aligned segment">
      <Grid columns={2}>
        <Grid.Column >
          <Image floated="right" shape="rounded" size="medium" src={"/build/img/4-redLogo-TransparentBG-crop.png"}/>
        </Grid.Column>
        <Grid.Column className="marqueeText" verticalAlign="middle">
          <Header className="siteTitle" as="h1" textAlign="left" inverted>
            {name}
            <Header.Subheader className="blurb" textAlign="center">
              {blurb}
            </Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid>
    </Container>
  }



}
