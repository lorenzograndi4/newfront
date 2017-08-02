// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import GameItem from './GameItem'
import Title from '../component/Title'
import PropTypes from 'prop-types'
import fetchGames from '../actions/games/fetch'

class Lobby extends PureComponent {
  static propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,
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
          <p>Create new game</p>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ games }) => {
  return { games }
}

export default connect(mapStateToProps, { fetchGames })(Lobby)
