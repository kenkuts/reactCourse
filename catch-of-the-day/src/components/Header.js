//A component is a reusable peice of your website.
//Allows you to build your own tags

//this line of code is enabling us to import everything from the react libray into the
//React variable. 
import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header className="top">
			<h1>Catch of the day</h1>
			<h3 className="tagline">{this.props.tagline}</h3>
			</header>
		)
	}
}

export default Header;