//A component is a reusable peice of your website.
//Allows you to build your own tags

//this line of code is enabling us to import everything from the react libray into the
//React variable. 
import React from 'react';
import { render } from 'react-dom';
import '../src/css/style.css';

//this is note from a node module
//We created this component. relative path
import App from '../src/components/App.js';
import StorePicker from '../src/components/StorePicker.js';




//this line renders our compnent into our HTML file. 
render(<App/>, document.querySelector('#main'));

