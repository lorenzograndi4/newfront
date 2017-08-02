// src/actions/games/subscribe.js
import API from '../../api'

export const SUBSCRIBED_TO_GAMES_SERVICE = 'SUBSCRIBED_TO_GAMES_SERVICE'
export const CREATE_GAME = 'GAME_CREATED'
export const UPDATE_GAME = 'GAME_UPDATED'
export const REMOVE_GAME = 'GAME_REMOVED'

const api = new API()
const games = api.service('games')

export default () => {
  return (dispatch) => {
    games.on('created', (game) => { dispatch(createdGame(game)) })
    games.on('updated', (game) => { dispatch(updatedGame(game)) })
    games.on('patched', (game) => { dispatch(updatedGame(game)) })
    games.on('removed', (game) => { dispatch(removedGame(game)) })

    dispatch({ type: SUBSCRIBED_TO_GAMES_SERVICE })
  }
}

const createdGame = (game) => {
  return {
    type: CREATE_GAME,
    payload: game
  }
}

const updatedGame = (game) => {
  return {
    type: UPDATE_GAME,
    payload: game
  }
}

const removedGame = (game) => {
  return {
    type: REMOVE_GAME,
    payload: game
  }
}
