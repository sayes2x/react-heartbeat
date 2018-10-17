import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Heartbeat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextBeat: new Date().getTime() + this.props.heartbeatInterval,
      timeout: null
    };
  }

  componentDidMount() {
    const nextBeat = new Date().getTime() + this.props.heartbeatInterval;
    this.setState({
      timeout: setTimeout(this.beat, nextBeat - new Date().getTime())
    });
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeout);
  }

  beat = () => {
    const nextBeat = this.state.nextBeat + this.props.heartbeatInterval;
    const nextTimeout = setTimeout(this.beat, nextBeat - new Date().getTime());
    this.setState({
      nextBeat: nextBeat,
      timeout: nextTimeout
    });
    this.props.heartbeatFunction();
  };

  render() {
    return <Fragment />;
  }
}

Heartbeat.propTypes = {
  heartbeatInterval: PropTypes.number,
  heartbeatFunction: PropTypes.func.isRequired
};

Heartbeat.defaultProps = {
  heartbeatInterval: 1000
};
