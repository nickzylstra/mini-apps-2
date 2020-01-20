import { Machine, assign } from 'xstate';


const gameMachine = Machine(
  {
    id: 'game',
    initial: 'frameFirstRollHistNo',
    context: {
      scoreTotal: 0,
      scoreFrames: (new Array(10)).fill([null, null, null]),
      frame: 1,
    },
    states: {
      // gameStart: {
      //   on: {
      //     START: 'frameFirstRollHistNo',
      //   },
      // },
      frameFirstRollHistNo: {
        on: {
          ROLL: [
            {
              target: 'frameSecondRollHistX',
              cond: 'isStrike',
              actions: [
                // 'updateScoreFrames',
                'updateFrame',
              ],
            },
            {
              target: 'frameSecondRollHistNo',
            },
          ],
        },
      },
      frameFirstRollHist1X: {},
      frameFirstRollHist2X: {},
      frameFirstRollHistSP: {},
      frameSecondRollHistNo: {},
      frameSecondRollHistX: {},
    },
  },
  {
    actions: {
      updateScoreTotal: assign({
        scoreTotal: ({ scoreTotal }, { pinCount }) => scoreTotal + pinCount,
      }),
      // updateScoreFrames: assign({}),
      updateFrame: assign({
        frame: ({ frame }) => frame + 1,
      }),
    },
    guards: {
      isStrike: (context, event) => event.pinCount === 10,
    },
  },
);

export default gameMachine;
