import React, { Component } from 'react'
// import { Container } from 'semantic-ui-react'
import marked from 'marked'

class SectionBody extends React.Component {
  render() {
    return (
    // const current_section = this.sections[this.state.current_section]
      <div className="container">
        <div dangerouslySetInnerHTML={{__html: marked(this.props.md)}}/>
      </div>
    )
  }
}

export default SectionBody
