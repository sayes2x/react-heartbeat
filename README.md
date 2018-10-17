# react-heartbeat

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

React Heartbeat is a simple React Component that will call a function that you provide at a regular interval. It should stay accurate within a few milliseconds as long as you run it. React Heartbeat will continue to call the function you pass to it as long as it is rendered, to stop it, just stop rendering React Heartbeat.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

# Usage

To use React Heartbeat with your component, first import it:

```javascript
import Heartbeat from 'react-heartbeat';
```

Then render it in your component’s render function:

```javascript
render() {
    return (
        <Heartbeat heartbeatFunction={this.count} heartbeatInterval={1000} />
    );
```

React Heartbeat accepts 2 props:

1. heartbeatFunction: this is the function you want to call after each heartbeatInterval.
2. heartbeatInterval: this is the time interval in milliseconds you want to be between each call to heartbeatFunction

heartbeatInterval is optional. If you do not provide this prop the default is 1000 milliseconds (1 second).

## Starting/Stopping React Heartbeat

There are several ways you can manage starting and stopping React Heartbeat from calling the function you pass to it. Here is one way:

In the state of your component add a 'paused' property as a boolean.

```javascript
this.state = {
  paused: true,
  timer: 0
};
```

Then in the render function set a variable using the ternary operator to 'null' if paused is true, and set it to the React Heartbeat component if paused is false. Then render this variable in your component like this:

```javascript
render() {
    const heartbeat =
        this.state.paused === true ? null : (
        <Heartbeat heartbeatFunction={this.count} heartbeatInterval={50} />
        );
    return (
        <Fragment>
        {heartbeat}
        </Fragment>
    );
}
```

For an example of React Heartbeat used in a web app see my [Pomodoro Timer](https://sayes2x-pomodoro-timer.netlify.com/). The source code for this project is [here](https://github.com/sayes2x/pomodoro-clock). Note: this project uses React Heartbeat as a component, not as a npm module. I created React Heartbeat while developing this project, then decided to make it an npm module.

# How it works.

React Heartbeat records the system time when you first call it in state, then it schedules a call to the function you provide as a prop using setTimeout at the interval you specify as a prop. When React Heartbeat calls your function, it compares the system time when it called your function to the time it should have called your function, then adjusts the next call to your function so that it will be called at twice the interval you provided from the time you first rendered React Heartbeat in your component. It continues comparing the time your function was called to the time it should have been called and making adjustments as long as you continue to render React Heartbeat in your component.

The source code for React Heartbeat is [here](https://github.com/sayes2x/react-heartbeat/blob/master/src/index.js).
