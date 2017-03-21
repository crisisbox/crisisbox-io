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

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  renderTabs() {
    var that = this;
    var tabs = [];
    tabs = _.map(that.props.pageContent, function(page, key) {
        return <Tab label={page.tabLabel} value={key}>
          {renderHTML(page.__content)}
        </Tab>
    });
    return tabs;

  }

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}>
          {this.renderTabs()}

      </Tabs>
    );
  }
}
