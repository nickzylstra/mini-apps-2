import { Machine, assign } from 'xstate';


const gameMachine = Machine(
  {
    id: 'game',
    initial: 'frameFirstRollHistNo',
    context: {
      score: 0,
      frames: (new Array(10)).fill([null, null, null]),
      currentFrame: 1,
      currentScoredFrame: 0,
    },
    states: {
      frameFirstRollHistNo: {
        on: {
          ROLL: [
            {
              target: 'frameSecondRollHistX',
              cond: 'isStrike',
              actions: [
                'updateFramesFirstRoll',
                'incrementFrame',
              ],
            },
            {
              target: 'frameSecondRollHistNo',
              actions: 'updateFramesFirstRoll',
            },
          ],
        },
      },
      frameFirstRollHist1X: {},
      frameFirstRollHist2X: {},
      frameFirstRollHistSP: {},
      frameSecondRollHistNo: {
        on: {
          ROLL: [
            {
              target: 'frameFirstRollHistSP',
              cond: 'isSpare',
              actions: [

              ],
            },
            {

            },
          ],
        },
      },
      frameSecondRollHistX: {},
    },
  },
  {
    actions: {
      updateScore: assign({
        score: ({ score }, { pinCount }) => score + pinCount,
      }),
      updateFramesFirstRoll: assign({
        frames: ({ frames, currentFrame }, { pinCount }) => {
          const nextFrames = [...frames].map((sF) => [...sF]);

          nextFrames[currentFrame - 1][1] = pinCount;
          return nextFrames;
        },
      }),
      // updateFramesSecondRoll: null,
      // updateFramesScore: null,
      incrementFrame: assign({
        currentFrame: ({ currentFrame }) => currentFrame + 1,
      }),
      incrementScoredFrame: assign({
        currentScoredFrame: ({ currentScoredFrame }) => currentScoredFrame + 1,
      }),
    },
    guards: {
      isStrike: (context, { pinCount }) => pinCount === 10,
      isSpare: ({ frames, currentFrame }, { pinCount }) => (
        frames[currentFrame - 1][1] + pinCount === 10),
    },
  },
);

export default gameMachine;
