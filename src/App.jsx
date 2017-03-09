import React, {Component} from 'react';
import { Container, Image, Header, Divider, Grid, Menu } from 'semantic-ui-react';
import content from './content';
import _ from 'underscore';

import Marquee from './Components/Marquee';
import SectionBody from './Components/SectionBody';

class App extends Component {

  constructor(props) {
    super(props);
    this.sections = {};
    this.menuItems = [];
    this.state = {
      current_section: 'Intro',
      menuItems: [],
    };
    this.loadSections = this.loadSections.bind(this);
    this.changeSection = this.changeSection.bind(this);
  }

  componentWillMount() {
    this.loadSections();
  }

  loadSections() {
    var that = this;
    _.map(content.sections, function(section, key) {
          that.sections[key] = {
            key: key,
            name: section.slice(0, section.indexOf("\n")),
            md: section
          }
    });
    this.setState({
      menuItems: _.map(this.sections, function(section, key) {
                  return {
                    indexName: key,
                    key,
                    name: section.name,
                    // active: (key == "Intro") ? true : undefined
                  }
                })
    });
  }

  changeSection(e, { indexName }) {
    this.setState({
      current_section: indexName
    });
  }

  render() {
    var current_section = this.sections[this.state.current_section];
    return (
      <Container fluid>
        <Marquee metadata={content.metadata} />
        <Container text className="ui vertical stripe segment" textAlign="left">
          <Menu widths={this.state.menuItems.length} defaultActiveIndex={0} items={this.state.menuItems} onItemClick={this.changeSection}/>
          <SectionBody md={current_section.md} />
        </Container>
      </Container>

    );
  }
}
export default App;
