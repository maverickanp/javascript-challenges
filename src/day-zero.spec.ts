import {hello} from './day-zero';

describe('day zero - tests', () => {
  it('Hello world - Print two lines of output', () => {
    const result = hello('Any_text');
    expect(result).toBe('Hello, World!\nAny_text');
  });
});
