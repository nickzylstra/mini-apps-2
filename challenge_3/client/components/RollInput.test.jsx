import React from 'react';
import { shallow } from 'enzyme';
import RollInput from './RollInput.jsx';

describe('RollInput', () => {
  const mockAddRoll = jest.fn();
  const wrapper = shallow(<RollInput
    addRoll={mockAddRoll}
  />);

  test('renders rollInput element', () => {
    expect(wrapper.find('#rollInput').getElements().length).toBe(1);
  });
});
