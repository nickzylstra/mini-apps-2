import React from 'react';
import { shallow } from 'enzyme';
import Scoreboard from './Scoreboard.jsx';

describe('Frame', () => {
  const scoreFrames = [
    [4, 3, 7],
    [4, 6, 20],
    [10, 0, 16],
    [3, 3, 6],
    [3, 3, 6],
    [3, 3, 6],
    [3, 3, 6],
    [3, 3, 6],
    [3, 3, 6],
    [10, 3, 19, 6],
  ];
  const scoreTotal = scoreFrames.reduce((total, sF) => total + sF[2], 0);

  const wrapper = shallow(<Scoreboard
    scoreTotal={scoreTotal}
    scoreFrames={scoreFrames}
  />);
  test('renders scoreboardTotal element with passed prop', () => {
    expect(wrapper.find('#scoreboardTotal').getElements()[0].props.children).toBe(`Game Score: ${scoreTotal}`);
  });
  test('renders scoreboardFrames with correct amount of frames', () => {
    expect(wrapper.find('#scoreboardFrames').getElements()[0].props.children.length).toBe(10);
  });
});
