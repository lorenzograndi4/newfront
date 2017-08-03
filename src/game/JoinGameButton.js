import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import joinGame from '../actions/games/join'

class JoinGameButton extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  render() {
    if (!this.props.signedIn) return null

    return (
      <div className="JoinGameButton">
        <RaisedButton
          label="Join this Game"
          primary={true}
          onClick={this.props.onChange}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { joinGame })(JoinGameButton)
