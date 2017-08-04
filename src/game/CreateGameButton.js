import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import createGame from '../actions/games/create'

class CreateGameButton extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool,
  }

  render() {
    if (!this.props.signedIn) return null

    return (
      <div className="CreateGameButton">
        <FloatingActionButton
          label="New Game"
          primary={true}
          onClick={this.props.createGame}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { createGame })(CreateGameButton)
