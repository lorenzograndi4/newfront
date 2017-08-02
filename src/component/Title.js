// src/components/Title.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Title extends PureComponent {
  static propTypes = {
    content: PropTypes.stringisRequired,
     title: PropTypes.stringisRequired,
  }

  render() {
    return(
      <div>
        <h1>{ this.props.content }</h1>
      </div>
    )
  }
}
