import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import App from './App'
import Movies from './components/vidly/showMovies'

ReactDOM.render(<Movies />,document.getElementById('root'));
