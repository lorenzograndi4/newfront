import { USER_SIGNED_IN } from '../actions/user/sign-in'
import { USER_SIGNED_OUT } from '../actions/user/sign-out'

const USER_KEY = 'games-api-user'
const currentUserFromLocalStorage = JSON.parse(
  window.localStorage.getItem(USER_KEY) || 'null')

export default (state = currentUserFromLocalStorage, { type, payload } = {}) => {
  switch (type) {
    case USER_SIGNED_IN :
      window.localStorage.setItem(USER_KEY, JSON.stringify(payload))
      return Object.assign({}, payload)

    case USER_SIGNED_OUT :
      window.localStorage.removeItem(USER_KEY)
      return null

    default :
      return state
  }
}
