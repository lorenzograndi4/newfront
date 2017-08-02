// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchGames from '../actions/games/fetch'
import GameItem from './GameItem'
import Title from '../component/Title'
import CreateGameButton from './CreateGameButton'
import PropTypes from 'prop-types'
import subscribeToGames from '../actions/games/subscribe'

class Lobby extends PureComponent {
  static propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,
    
  componentWillMount() {
    const { subscribed, fetchGames, subscribeToGames } = this.props
     fetchGames()
    if (!subscribed) subscribeToGames()
  }

  goToGame(gameId) {
    const { push } = this.props

    return () => {
      push(`/games/$(gameId)`)
    }
  }

  isJoinable(game) {
    if (game.started) return false
    return !!!this.isPlayer(game)
  }

  isPlayer(game) {
    return game.players
    .map((p) => (p.userId))
    .includes(this.props.currentUser._id)
  }

  renderGame(game, index) {
    return <GameItem key={index} { ...game } />
  }

  componentWillMount() {
    this.props.fetchGames()
  }

  render() {
    return(
      <div className="games wrapper">
        <header>

          <Title content="Games" />
        </header>

        <main>
          { this.props.games.map(this.renderGame) }
          <CreateGameButton />
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ games }) => {
  return { games }
}

export default connect(mapStateToProps, { fetchGames, subscribeToGames, push })(Lobby)
