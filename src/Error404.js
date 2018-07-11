import React, { Component } from 'react'

class Error404 extends Component {
	render() {
		return (
			<div className='search-books-results'>
				<h1>Route does not exist!</h1>
				<h2>Valid routes are '/ ' and '/search '</h2>
				<p>Go Udacity!</p>
				<img className='udacity-logo' src={require('./img/udacity404.png')} alt='Udacity Logo' />
			</div>
		)
	}
}

export default Error404
	