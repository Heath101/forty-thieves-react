import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from './components/GameBoard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GameBoard title='Forty Thieves'/>, document.getElementById('root'));
registerServiceWorker();
