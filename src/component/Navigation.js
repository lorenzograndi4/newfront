import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import signOut from '../actions/user/sign-out'
import AppBar from 'material-ui/AppBar'
import currentUser from '../reducers/currentUser'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'

class Navigation extends PureComponent {
  signUp() {
    this.props.push('/sign-up')
  }

  goHome() {
    this.props.push('/')
  }

  render() {
    const { signedIn, name } = this.props
    return (
      <AppBar
        title={signedIn
          ? "Welcome, " + name
          : "Nanogram"}
        iconElementLeft={<IconButton onClick={this.goHome.bind(this)}></IconButton>}
        iconElementRight={signedIn ?
          <FlatButton label="Sign out" onClick={this.props.signOut} /> :
          <FlatButton label="Sign up" onClick={this.signUp.bind(this)} />
        }
      />
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
  if (signedIn) { name: currentUser.name } // how to solve this?
})

export default connect(mapStateToProps, { push, signOut })(Navigation)
