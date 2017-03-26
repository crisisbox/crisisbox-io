import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import _ from 'underscore';
import renderHTML from 'react-render-html';

export default class HomeTabs extends React.Component {

  constructor(props) {
    super(props);
    this.styles = {
      tabholder: {
        backgroundColor: '#cacaca'
      },
      tabs: {
        color: '#333'
      },
      content: {
        position: 'absolute',
        left: '20%',
        top: '5em',
        padding: '3em',
        maxWidth: '27em',
        margin: '0 auto'
      },
      inkBar: {
        position: ''
      }
    }
    this.state = {
    };
    this.renderTabs = this.renderTabs.bind(this);
  }

  handleChange(value) {
    this.setState({value: value})
  }

  renderTabs() {
    var that = this;
    var tabs = [];
    tabs = _.map(that.props.pageContent, function(page, key) {
      return (
        <Tab key={key} label={page.tabLabel} value={key} buttonStyle={that.styles.tabs}>
          {renderHTML(page.__content)}
        </Tab>
      )
    });
    return tabs;

  }

  render() {
    return (
      <Tabs
        tabItemContainerStyle={this.styles.tabholder}
        tabTemplateStyle={this.styles.tabs}
        contentContainerClassName="tab-content"
        contentContainerStyle={this.styles.content}
        className='home-tabs' value={this.state.value}
        initialSelectedIndex={0}
        onChange={this.handleChange.bind(this)}>
          {this.renderTabs()}
      </Tabs>
    );
  }
}
