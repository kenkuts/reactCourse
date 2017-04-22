//A component is a reusable peice of your website.
//Allows you to build your own tags

//this line of code is enabling us to import everything from the react libray into the
//React variable. 
import React from 'react';
import { render } from 'react-dom';


//'class' creates our first component
class StorePicker extends React.Component {
	//components need render methods that display the HTML for the component
	//you can only return one parent component element in a render method
	render() {
		return (
			<form className="store-selector">
			{/*this is how you comment is JSX, you must put this either above the render method */}
			{/*or inside your first component*/}
				<h2>Please Enter a Store</h2>
				<input type="text" required placeholder="Store Name" />
				<button type="submit">Visit Store</button>
			</form>	
		) 
	}
}
		
		//this allows us to expo)rt the component into our index.js
export default StorePicker;