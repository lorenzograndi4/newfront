import API from '../../api'
import { LOAD_ERROR } from '../loading'

export const DELETED_GAME = 'DELETED_GAME'

const api = new API()

export default (gameId) => {
  return (dispatch) => {

    const backend = api.service('games')

    api.app.authenticate()
      .then(() => {
        backend.remove(gameId)
          .then((result) => {
            // dispatch({
            //   type: DELETED_GAME, // Don't need this either
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
