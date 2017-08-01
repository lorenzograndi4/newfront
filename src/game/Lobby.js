// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import GameItem from './GameItem'
import Title from '../component/Title'

class Lobby extends PureComponent {
  renderGame(game, index) {
    return <GameItem key={index} { ...game } />
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

export default connect(mapStateToProps)(Lobby)
