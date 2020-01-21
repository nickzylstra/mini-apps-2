const guards = {
  isValidSecondRoll: ({ frames, currentFrame }, { pinCount }) => (
    frames[currentFrame - 1].roll1 + pinCount <= 10),
  isStrike: (context, { pinCount }) => pinCount === 10,
  isSpare: ({ frames, currentFrame }, { pinCount }) => (
    frames[currentFrame - 1].roll1 + pinCount === 10),
  is10Frame: ({ currentFrame }) => currentFrame === 10,
  isStrike10Frame: ({ currentFrame }, { pinCount }) => (
    currentFrame === 10
      && pinCount === 10),
  shouldContinue10Frame: ({ frames, currentFrame }, { pinCount }) => (
    currentFrame === 10
      && frames[currentFrame - 1].roll1 + pinCount >= 10),
};

export default guards;
