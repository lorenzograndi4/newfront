import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import games from '../reducers/games'



class GameItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired,
  }

  render() {
    const { _id, title, players, } = this.props
    console.log(this.props)

    return(
      <article className="game">
        <Link to={`/games/${_id}`}>{ title }</Link>
      </article>
    )
  }
}

export default GameItem
