import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from './GameBoard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GameBoard title="Forty Thieves"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
