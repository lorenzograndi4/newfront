import API from '../../api'
import LOAD_ERROR from '../loading'

// export const CREATE_GAME = 'CREATE_GAME'
export const GAME_CREATED = 'GAME_CREATED'
// export default (newGame) => {
//   return {
//     type: CREATE_GAME,
//     payload: newGame
//   }
// }
const api = new API()

export default () => {
  return (dispatch) => {

    const backend = api.service('games')

    api.app.authenticate()
      .then(() => {
        backend.create({})
          .then((result) => {
            // dispatch({
            //   type: 'DO_WE_NEED_THIS', // answer: no
            //   payload: result
            // })
          })
          .catch((error) => {
            dispatch({
              type: LOAD_ERROR,
              payload: error.message
            })
          })
      })
      .catch((error) => {
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
