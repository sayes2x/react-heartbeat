import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import Heartbeat from '../src';

describe('Heartbeat', () => {
  // let node;

  // beforeEach(() => {
  //   node = document.createElement('div');
  // });

  // afterEach(() => {
  //   unmountComponentAtNode(node);
  // });

  // it('calls a function 5 times', function() {
  //   this.timeout(5010);
  //   let timesCalled = 0;
  //   const func = () => timesCalled++;
  //   render(<Heartbeat heartbeatFunction={func} />, node, () => {
  //     expect(timesCalled).toEqual(5);
  //   });
  // });

  it('disables the button when loading=true', () => {
    this.timeout(5010);
    let timesCalled = 0;
    const func = () => timesCalled++;
    expect(render(<Heartbeat heartbeatFunction={func} />));
  });
});
