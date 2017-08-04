import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchGames from '../actions/games/fetch'
import Title from '../component/Title'
import Board from '../component/Board'
import Board2 from '../component/Board2'
import "../index.css"



export class GamePage extends PureComponent {

  static PropTypes = {
    title: PropTypes.string.isRequired,
  }

  componentWillMount(){
    this.props.fetchGames()
  }


  render() {
      const {  title } = this.props
      console.log(this.props)

    return(

      <div className="game">
        <h1>
          <Title content={ title } />
        </h1>

        <table className="nano">
          <Board />
        </table>
        <table className="nano">
          <Board2 />
        </table>
      </div>



    )
  }
}



const mapStateToProps = ({ games }, { params }) => {
  const game = games.reduce((prev, next) => {
    if (next._id === params.gameId) {
      return next
    }
    return prev
  }, {})

  return{
    ...game
  }
}




export default connect(mapStateToProps, { fetchGames })(GamePage)
