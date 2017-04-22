//A component is a reusable peice of your website.
//Allows you to build your own tags

//this line of code is enabling us to import everything from the react libray into the
//React variable. 
import React from 'react';


import Header from './Header.js';
import Order from './Order.js';
import Inventory from './Inventory.js';

class App extends React.Component {
	render() {
		return (
			<div className="catch-of-the-day">
				{/*You can add props or variables to your components an example would be the tagline props*/}
				{/*And another example could be the age props*/}
				<div className="menu">
					<Header age="500" tagline="Fresh Seafood Market"/>
				</div>
				<Order />
				<Inventory />
			</div>
		)
	}
}
		
		//this allows us to export the component into our index.js
export default App;