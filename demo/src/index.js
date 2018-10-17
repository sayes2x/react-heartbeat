import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Heartbeat from '../../src';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: true,
      timer: 0
    };
  }

  count = () => {
    const timer = this.state.timer;
    this.setState({
      timer: timer + 1
    });
  };

  handlePause = () => {
    this.setState({
      paused: !this.state.paused
    });
  };

  render() {
    const heartbeat =
      this.state.paused === true ? null : (
        <Heartbeat heartbeatFunction={this.count} heartbeatInterval={50} />
      );
    return (
      <Fragment>
        {heartbeat}
        <p>{this.state.timer}</p>
        <button onClick={this.handlePause}>
          {this.state.paused === true ? 'Start' : 'Pause'}
        </button>
      </Fragment>
    );
  }
}

render(<Timer />, document.querySelector('#demo'));
