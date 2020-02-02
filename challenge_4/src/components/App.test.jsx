import React from 'react';
import renderWithRedux from '../../testUtils/renderWithRedux';
import App from './App.jsx';


describe('App', () => {
  test('renders Game', () => {
    const { getByText } = renderWithRedux(<App />);
    const appDiv = getByText(/Game/);
    expect(appDiv).toBeInTheDocument();
  });
})
