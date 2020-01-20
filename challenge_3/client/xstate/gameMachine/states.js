const states = {
  frameFirstRollHistNo: {
    on: {
      ROLL: [
        {
          target: 'frameFirstRollHist1X',
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
    // meta: {
    //   test: () => {},
    // },
  },
  frameFirstRollHist1X: {
    on: {
      ROLL: [
        {
          target: 'frameFirstRollHist2X',
          cond: 'isStrike',
          actions: [
            'updateCurrentFrameFirstRoll',
            'incrementCurrentFrame',
          ],
        },
        {
          target: 'frameSecondRollHistX',
          actions: 'updateCurrentFrameFirstRoll',
        },
      ],
    },
  },
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
          cond: 'isValidSecondRoll',
          actions: [
            'updateCurrentFrameSecondRoll',
            'updateFramesScore',
            'incrementCurrentFrame',
            'incrementScoredFrame',
            'updateScore',
          ],
        },
        // TODO - handle invalid second roll with error message
      ],
    },
  },
  frameSecondRollHistX: {},
  frameThirdRoll: {
    on: {
      ROLL: {
        target: 'finished',
        actions: [
          'add10FrameThirdRoll',
          'updateFramesScore',
          'updateScore',
        ],
      },
    },
  },
  finished: {
    type: 'final',
  },
};

export default states;
