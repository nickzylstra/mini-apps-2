import { createModel } from '@xstate/test';
import gameMachine from './gameMachine.js';

const gameModel = createModel(gameMachine).withEvents({
  ROLL: {
    // exec: async (ctx, event) => {},
    cases: [
      { pinCount: 0 },
      { pinCount: 3 },
      { pinCount: 5 },
      { pinCount: 7 },
      { pinCount: 10 },
    ],
  },
});

describe('gameMachine', () => {
  const testPlans = gameModel.getShortestPathPlans();
  testPlans.forEach((plan) => {
    describe(plan.description, () => {
      plan.paths.forEach((path) => {
        test(path.description, async () => {
          // TODO - add setup
          const result = await path.test(
            // TODO - add context
          );
          expect(result.state.error).toBe(null);
        });
      });
    });
  });

  test('has full coverage', () => {
    expect(gameModel.testCoverage()).toBe(true);
  });
});
