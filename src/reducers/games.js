import { FETCHED_GAMES } from '../actions/games/fetch'
import {
  CREATE_GAME,
  UPDATE_GAME,
  REMOVE_GAME
} from '../actions/games/subscribe'

const games =[
  {
    title: 'Game1',
    players: []
  },
  {
    title: 'Game2',
    players: []
  }
]

export default function(state = games, { type, payload } = {}) {
  switch(type) {
      case CREATE_GAME :
        return [Object.assign({}, payload)].concat(state)

      case UPDATE_GAME :
        return state.map((game) => {
          if (game._id === payload._id) {
            return {...payload }
          }
          return game
        })

      case REMOVE_GAME :
        return state.filter((game) => (game._id !== payload._id))

      default :
        return state
    }
}
