import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class GameItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired,
  }
  render() {
    const { title, players } = this.props

    return(
      <article className="game">
        <h1>{ title }</h1>
      </article>
    )
  }
}

export default GameItem
