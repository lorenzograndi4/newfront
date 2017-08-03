import React, { PureComponent } from 'react'

class Square extends React.Component {
  constructor(){
    super();
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export default Square

//we can use css bk color to render the click
