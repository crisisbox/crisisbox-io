import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import content from './content'
import _ from 'underscore'
import Marquee from './Components/Marquee'
import SectionBody from './Components/SectionBody'
import HomeTabs from './Components/HomeTabs'
import {Tabs, Tab} from 'material-ui/Tabs'

export default class App extends React.Component {

  constructor(props) {
    injectTapEventPlugin();
    super(props)
    // this.sections
    this.menuItems
    this.state = {
      menuItems: [],
    }
  }

  //
  // componentWillMount() {
  //   this.getTabData();
  // }
  //
  // getTabData() {
  //   this.setState({sections})
  // }


  // function changeSection(e, { indexName }) {
  //   this.setState({
  //     current_section: indexName
  //   })
  // }

  render() {
    // const current_section = this.sections[this.state.current_section]
    console.log( this.props.content.metadata)
    return (
      <MuiThemeProvider>
        <main className="main">
          <Marquee metadata={this.props.content.metadata} />
          <HomeTabs />
        </main>
      </MuiThemeProvider>
    )
  }
}
