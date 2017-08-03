import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { history } from '../store'
import JoinGameButton from './JoinGameButton'
import joinGame from  '../actions/games/join'
import DeleteGameButton from './DeleteGameButton'
import deleteGame from  '../actions/games/delete'
// import games from '../reducers/games'

class GameItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  joinThisGame() {
    const { _id, joinGame } = this.props
    joinGame(_id)
  }

  deleteThisGame() {
    const { _id, deleteGame } = this.props
    deleteGame(_id)
  }

  render() {
    const { _id, title, players } = this.props
    console.log(this.props)

    return(
      <article className="game">
        <Link to={`/games/${_id}`}>{ title } with id: { _id }</Link>
        <JoinGameButton onChange={this.joinThisGame.bind(this)} />
        <DeleteGameButton onChange={this.deleteThisGame.bind(this)} />
      </article>
    )
  }
}

export default connect(null, { joinGame, deleteGame })(GameItem)
