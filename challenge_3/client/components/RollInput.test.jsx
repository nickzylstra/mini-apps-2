import React from 'react';
import { shallow } from 'enzyme';
import RollInput from './RollInput.jsx';

describe('RollInput', () => {
  const mockAddRoll = jest.mock();
  const wrapper = shallow(<RollInput
    addRoll={mockAddRoll}
  />);

  test('renders rollInput element', () => {
    expect(wrapper.find('#rollInput').getElements().length).toBe(1);
  });

  test('renders alert for invalid input', () => {
  });

  test('renders valid input as input value', () => {
  });

  test('calls addRoll on enter with valid input value', () => {
  });
});
