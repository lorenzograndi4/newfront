// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchGames from '../actions/games/fetch'
import GameItem from './GameItem'
// import Title from '../component/Title'
import { List } from 'material-ui/List';
import CreateGameButton from './CreateGameButton'
import PropTypes from 'prop-types'
import subscribeToGames from '../actions/games/subscribe'
import './Lobby.css'

class Lobby extends PureComponent {
  static propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,
  }

  componentWillMount() { // double check this
    const { subscribed, fetchGames, subscribeToGames } = this.props
     fetchGames()
    if (!subscribed) subscribeToGames()
    // this.props.fetchGames()
    // this.props.subscribeToGames()
  }

  goToGame(gameId) {
    const { push } = this.props

    return () => {
      push(`/games/$(gameId)`)
    }
  }
  //
  // isJoinable(game) {
  //   if (game.started) return false
  //   return !!!this.isPlayer(game)
  // }
  //
  // isPlayer(game) {
  //   return game.players
  //   .map((p) => (p.userId))
  //   .includes(this.props.currentUser._id)
  // }

  renderGame(game, index) {
    return <GameItem key={index} { ...game } />
  }

  render() {
    return(
      <div className="games-wrapper">
        <main>
          <CreateGameButton />
            <List>
              { this.props.games.map(this.renderGame.bind(this)) }
            </List>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ games, currentUser, subscriptions }) => (
   {
    games,
    currentUser,
    subscribed: subscriptions.includes('games')
   }
)

export default connect(mapStateToProps, { fetchGames, subscribeToGames, push })(Lobby)
