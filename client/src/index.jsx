import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import dbData from "../../data/movieData.js"

// Global styling
import './styles/main.css';

ReactDOM.render(<App movies={ dbData } />, document.getElementById('root'));
