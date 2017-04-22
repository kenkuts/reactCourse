//A component is a reusable peice of your website.
//Allows you to build your own tags

//this line of code is enabling us to import everything from the react libray into the
//React variable. 
import React from 'react';

class Header extends React.Component {
	render() {
		console.log(this);
		return (
			<header className="top">
			{/*this.props.tagline is a variable that you just inserted from the Header tagline*/}
			<h1>Catch
			<span className="ofThe">
				<span className="of">of 
				</span>
				<span className="the">the
				</span>
			</span>
			day</h1>
			<h3 className="tagline"><span>{this.props.tagline}</span></h3>
			</header>
		)
	}
}

export default Header;