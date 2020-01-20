import React from 'react';
import { shallow } from 'enzyme';
import Scoreboard from './Scoreboard.jsx';

describe('Scoreboard', () => {
  const frames = [
    { roll1: 4, roll2: 3, score: 7 },
    { roll1: 4, roll2: 6, score: 20 },
    { roll1: 10, roll2: 0, score: 16 },
    { roll1: 3, roll2: 3, score: 6 },
    { roll1: 3, roll2: 3, score: 6 },
    { roll1: 3, roll2: 3, score: 6 },
    { roll1: 3, roll2: 3, score: 6 },
    { roll1: 3, roll2: 3, score: 6 },
    { roll1: 3, roll2: 3, score: 6 },
    {
      roll1: 10, roll2: 3, score: 19, roll3: 6,
    },
  ];
  const score = frames.reduce((total, sF) => total + sF[2], 0);

  const wrapper = shallow(<Scoreboard
    score={score}
    frames={frames}
  />);
  test('renders scoreboardTotal element with passed prop', () => {
    expect(wrapper.find('.scoreboardTotal').getElements()[0].props.children).toBe(`Game Score: ${score}`);
  });
  test('renders scoreboardFrames with correct amount of frames', () => {
    expect(wrapper.find('.scoreboardFrames').getElements()[0].props.children.length).toBe(10);
  });
});
