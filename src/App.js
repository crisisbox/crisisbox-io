import React from 'react'
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import content from './content';
import _ from 'underscore';
import Marquee from './Components/Marquee';
import SectionBody from './Components/SectionBody';

var sections
var menuItems
var state = {
  current_section: 'Intro',
  menuItems: [],
}

function componentWillMount() {
  this.loadSections();
}

function loadSections() {
  var that = this;
  _.map(content.sections, function(section, key) {
    that.sections[key] = {
      key: key,
      name: section.slice(0, section.indexOf("\n")),
      md: section
    }
  })
}

function setState() {
  menuItems: _.map(this.sections, function(section, key) {
    return {
      indexName: key,
      key,
      name: section.name,
    }
  })
}

function changeSection(e, { indexName }) {
  this.setState({
    current_section: indexName
  })
}

const App = props => {
  const current_section = this.sections[this.state.current_section]
  return (

    <div>Test</div>
    // <MuiThemeProvider>
    //   <main className="main">
    //     <Marquee metadata={content.metadata} />
    //     <Toolbar>
    //       <ToolbarGroup>
    //       // <Menu className="nav-main" widths={this.state.menuItems.length} defaultActiveIndex={0} items={this.state.menuItems} onItemClick={this.changeSection}/>
    //       </ToolbarGroup>
    //     </Toolbar>
    //   </main>
    // </MuiThemeProvider>
  )
}

export default App;
