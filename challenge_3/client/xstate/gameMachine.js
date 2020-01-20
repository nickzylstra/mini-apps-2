import { Machine, assign } from 'xstate';


const copyFrames = (frames) => [...frames].map((frame) => ({ ...frame }));

const gameMachine = Machine(
  {
    id: 'game',
    initial: 'frameFirstRollHistNo',
    context: {
      score: 0,
      frames: (new Array(10)).fill({ score: null, roll1: null, roll2: null }),
      currentFrame: 1,
      currentScoringFrame: 1,
    },
    states: {
      frameFirstRollHistNo: {
        on: {
          ROLL: [
            {
              target: 'frameSecondRollHistX',
              cond: 'isStrike',
              actions: [
                'updateCurrentFrameFirstRoll',
                'incrementCurrentFrame',
              ],
            },
            {
              target: 'frameSecondRollHistNo',
              actions: 'updateCurrentFrameFirstRoll',
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
                'updateCurrentFrameSecondRoll',
                'incrementCurrentFrame',
              ],
            },
            {
              target: 'frameFirstRollHistNo',
              actions: [
                'updateCurrentFrameSecondRoll',
                'updateFramesScore',
                'incrementCurrentFrame',
                'incrementScoredFrame',
              ],
            },
          ],
        },
      },
      frameSecondRollHistX: {},
    },
  },
  {
    actions: {
      // updateScore: assign({
      //   score: ({ score }, { pinCount }) => score + pinCount,
      // }),
      updateCurrentFrameFirstRoll: assign({
        frames: ({ frames, currentFrame }, { pinCount }) => {
          const nextFrames = copyFrames(frames);
          nextFrames[currentFrame - 1].roll1 = pinCount;
          return nextFrames;
        },
      }),
      updateCurrentFrameSecondRoll: assign({
        frames: ({ frames, currentFrame }, { pinCount }) => {
          const nextFrames = copyFrames(frames);
          nextFrames[currentFrame - 1].roll2 = pinCount;
          return nextFrames;
        },
      }),
      updateFramesScore: assign({
        frames: ({ frames, currentFrame, currentScoringFrame }) => {
          const { roll1, roll2 } = frames[currentFrame - 1];
          const nextFrames = copyFrames(frames);
          switch (currentFrame - currentScoringFrame) {
            case 2:
              
              break;
          
            case 1:

              break;
            default:
              nextFrames[currentScoringFrame - 1].score = roll1 + roll2;
              break;
          }
          return nextFrames;
        },
      }),
      incrementCurrentFrame: assign({
        currentFrame: ({ currentFrame }) => currentFrame + 1,
      }),
      incrementScoredFrame: assign({
        currentScoringFrame: ({ currentScoringFrame }) => currentScoringFrame + 1,
      }),
    },
    guards: {
      isStrike: (context, { pinCount }) => pinCount === 10,
      isSpare: ({ frames, currentFrame }, { pinCount }) => (
        frames[currentFrame - 1].roll1 + pinCount === 10),
    },
  },
);

export default gameMachine;
