import React from 'react';
import { shallow } from 'enzyme';
import App from './App.jsx';

describe('App', () => {
  const wrapper = shallow(<App />);
  test('renders App element', () => {
    expect(wrapper.find('#app').getElements().length).toBe(1);
  });
});
