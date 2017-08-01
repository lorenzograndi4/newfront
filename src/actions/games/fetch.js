import API from '../../api'

export const FETCHED_GAMES = 'FETCHED_GAMES'

const api = new API()

export default () => {
  return (dispatch) => {
    api.service('games')
      .find()
      .then((result) => {
        console.log(result)
        dispatch({
          type: FETCHED_GAMES,
          payload: result.data
        })
    })
    .catch((error) => {
      // error handling!
    })
  }
}
