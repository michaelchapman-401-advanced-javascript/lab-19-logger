'use strict';

const log = require('../log.js');

describe('log module', () => {
  it('Should console.log when called', () => {
    // arrange 
    let spy = jest.spyOn(console, 'log');

    // act
    log('message', 'type');
    // assert

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});