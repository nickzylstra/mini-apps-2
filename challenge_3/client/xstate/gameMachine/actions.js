import { assign } from 'xstate';

const copyFrames = (frames) => [...frames].map((frame) => ({ ...frame }));

const actions = {
  updateScore: assign({
    score: ({ frames }) => frames.reduce((total, frame) => total + frame.score, 0),
  }),
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
  add10FrameThirdRoll: assign({
    frames: ({ frames }, { pinCount }) => {
      const nextFrames = copyFrames(frames);
      nextFrames[9].roll3 = pinCount;
      return nextFrames;
    },
  }),
  updateFramesScore: assign({
    frames: ({ frames, currentFrame, currentScoringFrame }) => {
      const { roll1, roll2 } = frames[currentFrame - 1];
      const roll3 = frames[9].roll3 || 0;
      const nextFrames = copyFrames(frames);
      switch (currentFrame - currentScoringFrame) {
        case 2:
          // TODO - handle double strike scoring
          break;
        case 1:
          // TODO - handle spare or single strike scoring
          break;
        default:
          nextFrames[currentScoringFrame - 1].score = roll1 + roll2 + roll3;
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
};

export default actions;
