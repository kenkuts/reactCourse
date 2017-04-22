//A component is a reusable peice of your website.
//Allows you to build your own tags

//this line of code is enabling us to import everything from the react libray into the
//React variable. 
import React from 'react';
import { render } from 'react-dom';

class Order extends React.Component {
	render() {
		return (

			<p>Order</p>
		)
	}
}

export default Order;