import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Hero from './Components/Hero'
import HomeTabs from './Components/HomeTabs'

export default class App extends React.Component {

  constructor(props) {
    injectTapEventPlugin();
    super(props)
    this.menuItems
    this.state = {
      menuItems: [],
    }
  }

  render() {
    var { metadata, pageContent } = this.props.content
      return (
      <MuiThemeProvider>
        <main className="main">
          <Hero metadata={metadata} />
          <HomeTabs pageContent={pageContent}/>
        </main>
      </MuiThemeProvider>
    )
  }
}
