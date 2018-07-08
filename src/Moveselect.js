import React, { Component } from "react";
import PropTypes from 'prop-types';

class MoveSelect extends Component {

	state = {
		bookshelf: 'move'
	}

	componentDidMount() {
		this.setState({bookshelf: this.props.bookshelf})
	}

	onChangeSelection(evt) {
		if(evt.target.value){
			this.setState({bookshelf: evt.target.value})
		}
	}

	render() {
		return (
			<div className="book-shelf-changer">
            <select onChange={this.onChangeSelection.bind(this)}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value={"currentlyReading"}>Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
		)
	}
}


MoveSelect.propTypes = {
	bookshelf: PropTypes.string.isRequired
}

export default MoveSelect