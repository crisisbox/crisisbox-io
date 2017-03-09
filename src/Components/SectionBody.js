import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import marked from 'marked';

export default class SectionBody extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <Container text>
      <div dangerouslySetInnerHTML={{__html: marked(this.props.md)}}/>
        </Container>
  }
}
