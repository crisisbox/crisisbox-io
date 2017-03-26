import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import _ from 'underscore';
import renderHTML from 'react-render-html';

export default class HomeTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '1_intro',
    };
    this.renderTabs = this.renderTabs.bind(this);
  }

  handleChange(value) {
    this.setState({value: value})
  }

  renderTabs() {
    var that = this;
    var tabs = [];
    var c = console;
    tabs = _.map(that.props.pageContent, function(page, key) {
      c.log( page )
      return (
        <Tab key={key} label={page.tabLabel} value={key}>
          {renderHTML(page.__content)}
        </Tab>
      )
    });
    return tabs;

  }

  render() {
    return (
      <Tabs value={this.state.value} onChange={this.handleChange.bind(this)}>
          {this.renderTabs()}
      </Tabs>
    );
  }
}
