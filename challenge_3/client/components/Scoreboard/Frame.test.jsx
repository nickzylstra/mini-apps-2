import React from 'react';
import { shallow } from 'enzyme';
import Frame from './Frame.jsx';

describe('Frame', () => {
  const frameNum = 1;
  const frame = { score: 16, roll1: 10, roll2: 0 };
  const wrapper = shallow(<Frame frameNum={frameNum} frame={frame} />);

  test('renders frameNum element with passed frameNum number prop', () => {
    expect(wrapper.find('.frameNum').getElements()[0].props.children).toBe(`${frameNum}  `);
  });
  test('renders frameScore element with passed frameScore prop', () => {
    expect(wrapper.find('.frame').getElements()[0].props.children).toBe(frame.score);
  });
});
