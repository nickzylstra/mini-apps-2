import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Frame from './Frame.jsx';

describe('Frame', () => {
  const frame = 1;
  const scoreFrame = [10, 0, 16];
  const wrapper = shallow(<Frame frame={frame} scoreFrame={scoreFrame} />)
  test('renders frameNum element with passed frame number prop', () => {
    expect(wrapper.find('#frameNum').getElements()[0].props.children).toBe(`${frame}  `);
  });
});
