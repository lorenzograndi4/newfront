import { CREATE_GAME } from '../actions/games/create'
import { FETCHED_GAMES } from '../actions/games/fetch'


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

      case FETCHED_GAMES :
        return state.concat(payload)

      default :
        return state
    }
}
