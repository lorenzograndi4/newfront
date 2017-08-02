import feathers from 'feathers/client'
import socketio from 'feathers-socketio/client'
import hooks from 'feathers-hooks'
import auth from 'feathers-authentication-client'
import io from 'socket.io-client/dist/socket.io'

const FEATHERS_TOKEN_KEY = 'games-api'

const host = 'ws://localhost:3000'



const socket = io(host, {
  transports: ['websocket']

})

const feathersClient = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(auth({
    storage: window.localStorage,
    storageKey: FEATHERS_TOKEN_KEY,
  }))

export default feathersClient

// still need to yarn remove feathers-rest superagent
// and yarn add feathers-socketio socket.io-client
