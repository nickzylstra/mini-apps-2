export default {
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
};
