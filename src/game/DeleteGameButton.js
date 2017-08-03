import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import deleteGame from '../actions/games/delete'

class DeleteGameButton extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  render() {
    if (!this.props.signedIn) return null

    return (
      <div className="DeleteGameButton">
        <RaisedButton
          label="Delete this Game"
          primary={false}
          onClick={this.props.onChange}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { deleteGame })(DeleteGameButton)
