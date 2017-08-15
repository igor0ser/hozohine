import React, { PureComponent } from 'react';
import socket from '../utils/socket';

class SocketComp extends PureComponent {
  state = {
    commentText: 'waiting comment'
  }

  componentDidMount() {
    console.log('componentDidMount');
    socket.onComment(({ commentText }) => {
      console.log(commentText);
      this.setState({ commentText });
    });
  }

  onClick = () => {
    console.log(this.input.value);
  }

  render() {
    return (
      <div className="socket">
        {this.state.commentText}
      </div>
    );
  }
}

export default SocketComp;
