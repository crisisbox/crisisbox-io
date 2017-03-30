import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import _ from 'underscore'
import renderHTML from 'react-render-html'
import Radium from 'radium'

class HomeTabs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    };
    this.renderTabs = this.renderTabs.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({value: value})
  }

  renderTabs() {
    var that = this
    var tabs = []
    tabs = _.map(that.props.pageContent, function(page, key) {
      return (
        <Tab key={key} label={page.tabLabel} value={key} buttonStyle={styles.tabs}>
          {renderHTML(page.__content)}
        </Tab>
      )
    })
    return tabs

  }

  render() {
    return (
      <Tabs
        tabItemContainerStyle={styles.tabholder}
        tabTemplateStyle={styles.tabs}
        contentContainerClassName="tab-content"
        contentContainerStyle={styles.content}
        className='home-tabs' value={this.state.value}
        initialSelectedIndex={0}
        onChange={this.handleChange.bind(this)}>
          {this.renderTabs()}
      </Tabs>
    );
  }
}

var styles = {
  tabholder: {
    backgroundColor: '#cacaca'
  },
  tabs: {
    color: '#333'
  },
  content: {
    position: 'absolute',
    top: '2em',
    padding: '3em',
    maxWidth: '27em',
    margin: '0 auto',
    left: 0,
    '@media screen and (minWidth: 960px)': {
      left: '20%'
    }
  }
}

export default Radium(HomeTabs)
