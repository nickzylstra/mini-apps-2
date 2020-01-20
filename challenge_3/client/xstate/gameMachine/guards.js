const guards = {
  isValidSecondRoll: ({ frames, currentFrame }, { pinCount }) => (
    frames[currentFrame - 1].roll1 + pinCount <= 10),
  isStrike: (context, { pinCount }) => pinCount === 10,
  isSpare: ({ frames, currentFrame }, { pinCount }) => (
    frames[currentFrame - 1].roll1 + pinCount === 10),
};

export default guards;
