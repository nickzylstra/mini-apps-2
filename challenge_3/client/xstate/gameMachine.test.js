import { createModel } from '@xstate/test';
import gameMachine from './gameMachine.js';

const gameModel = createModel(gameMachine).withEvents({
  ROLL: {
    pinCount: 3,
  },
});

describe('gameMachine', () => {
  test('has full coverage', () => {
    expect(gameModel.testCoverage()).toBe(true);
  });
});
