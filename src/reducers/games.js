import { FETCHED_GAMES } from '../actions/games/fetch'
import {
  CREATE_GAME,
  UPDATE_GAME,
  REMOVE_GAME
} from '../actions/games/subscribe'
// import { CREATE_GAME } from '../actions/games/create'

// const games =[
//   {
//     _id: 1,
//     title: 'Game1',
//     players: []
//   },
//   {
//     _id: 2,
//     title: 'Game2',
//     players: []
//   }
// ]

export default function(state = [], { type, payload } = {}) {
  switch(type) {
      case CREATE_GAME :
        // return [Object.assign({}, payload)].concat(state)
        const newGame = { ...payload }
        return [newGame].concat(state)

      case UPDATE_GAME :
        return state.map((game) => {
          if (game._id === payload._id) {
            return {...payload }
          }
          return game
        })

      case REMOVE_GAME :
        return state.filter((game) => (game._id !== payload._id))

    case FETCHED_GAMES :
        // return state.concat[payload ]
        return [...payload]

      default :
        return state
    }
}
