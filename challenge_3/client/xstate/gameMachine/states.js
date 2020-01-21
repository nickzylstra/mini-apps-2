const states = {
  frameFirstRollHistNo: {
    on: {
      ROLL: [
        // {
        //   cond: 'isStrike10Frame',
        //   target: 'frameSecondRollHist1X',
        //   actions: [
        //     'updateCurrentFrameFirstRoll',
        //   ],
        // },
        {
          cond: 'isStrike',
          target: 'frameFirstRollHist1X',
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
          cond: 'isStrike10Frame',
          target: 'frameSecondRollHistX',
          actions: [
            'updateCurrentFrameFirstRoll',
          ],
        },
        {
          cond: 'isStrike',
          target: 'frameFirstRollHist2X',
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
  frameFirstRollHistSP: {
    on: {
      ROLL: [
        // {
        //   cond: 'isStrike10Frame',
        //   target: 'frameSecondRollHistX',
        //   actions: [
        //     'updateCurrentFrameFirstRoll',
        //   ],
        // },
        {
          cond: 'isStrike',
          target: 'frameFirstRollHist1X',
          actions: [
            'updateCurrentFrameFirstRoll',
            'updateFramesScore',
            'incrementScoringFrame',
            'incrementCurrentFrame',
          ],
        },
        {
          target: 'frameSecondRollHistNo',
          actions: [
            'updateCurrentFrameFirstRoll',
            'updateFramesScore',
            'incrementScoringFrame',
          ],
        },
      ],
    },
  },
  frameSecondRollHistNo: {
    on: {
      ROLL: [
        {
          cond: 'isSpare10Frame',
          target: 'frame10ThirdRoll',
          actions: [
            'updateCurrentFrameSecondRoll',
          ],
        },
        {
          cond: 'is10Frame',
          target: 'finished',
          actions: [
            'updateCurrentFrameSecondRoll',
            'updateFramesScore',
            'updateScore',
          ],
        },
        {
          cond: 'isSpare',
          target: 'frameFirstRollHistSP',
          actions: [
            'updateCurrentFrameSecondRoll',
            'incrementCurrentFrame',
          ],
        },
        {
          cond: 'isValidSecondRoll',
          target: 'frameFirstRollHistNo',
          actions: [
            'updateCurrentFrameSecondRoll',
            'updateFramesScore',
            'incrementCurrentFrame',
            'incrementScoringFrame',
            'updateScore',
          ],
        },
        {
          // TODO - handle invalid second roll with error message
          target: 'frameSecondRollHistNo',
        },
      ],
    },
  },
  frameSecondRollHistX: {
    on: {
      ROLL: [
        {
          cond: 'isSpare10Frame',
          target: 'frame10ThirdRoll',
          actions: [
            'updateCurrentFrameSecondRoll',
            'updateFramesScore',
            'incrementScoringFrame',
            'updateScore',
          ],
        },
        {
          cond: 'is10Frame',
          target: 'finished',
          actions: [
            'updateCurrentFrameSecondRoll',
            'updateFramesScore',
            'incrementScoringFrame',
            'updateFramesScore',
            'updateScore',
          ],
        },
        {
          cond: 'isSpare',
          target: 'frameFirstRollHistSP',
          actions: [
            'updateCurrentFrameSecondRoll',
            'updateFramesScore',
            'incrementScoringFrame',
            'incrementCurrentFrame',
            'updateScore',
          ],
        },
        {
          cond: 'isValidSecondRoll',
          target: 'frameFirstRollHistNo',
          actions: [
            'updateCurrentFrameSecondRoll',
            'updateFramesScore',
            'incrementScoringFrame',
            'updateFramesScore',
            'incrementScoringFrame',
            'incrementCurrentFrame',
            'updateScore',
          ],
        },
        {
          // TODO - handle invalid second roll with error message
          target: 'frameSecondRollHistNo',
        },
      ],
    },
  },
  frame10ThirdRoll: {
    on: {
      ROLL: {
        target: 'finished',
        actions: [
          'addThirdRoll10Frame',
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
