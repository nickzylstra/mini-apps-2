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
    wrapper.find('input').simulate('change', { target: { value: 'a' } });
    expect(wrapper.find('div.alert').getElements().length).toBe(1);
  });

  test('renders valid input as input value', () => {
    const value = 3;
    wrapper.find('input').simulate('change', { target: { value } });
    expect(wrapper.find('div.alert').getElements().length).toBe(0);
    debugger;
    expect(wrapper.find('input').getElements()[0].props.value).toBe(value);
  });

  test('calls addRoll on enter with valid input value', () => {
  });
});
