import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { ListItem } from 'material-ui/List';
import JoinGameButton from './JoinGameButton'
import joinGame from  '../actions/games/join'
import DeleteGameButton from './DeleteGameButton'
import deleteGame from  '../actions/games/delete'
import './GameItem.css'
// import games from '../reducers/games'

class GameItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    usePlural: PropTypes.bool
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
    const usePlural = (players.length >= 2)
    console.log(this.props)

    return(
        <ListItem className='item-wrapper'>
          <Link className='float-left link' to={`/games/${_id}`}>
            This { title } has { players.length } player
            { usePlural ? 's' : ''}
          </Link>
          <div className='clear'>
          </div>
          <div className='float-right'>
            <DeleteGameButton className='secondary btn' onChange={this.deleteThisGame.bind(this)} />
            <JoinGameButton className='primary btn' onChange={this.joinThisGame.bind(this)} />
          </div>
        </ListItem>
    )
  }
}

export default connect(null, { joinGame, deleteGame })(GameItem)
