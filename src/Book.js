import React, { Component } from "react";
import PropTypes from 'prop-types';
import Stars from "./Stars";

class Book extends Component {

  render() {
		//console.log(this.props.book)
		//console.log(this.props.book.averageRating)
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: 'url(' + this.props.book.imageLinks.thumbnail +')'
            }}
          />
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors[0]}</div>
				<Stars rating={this.props.book.averageRating} />
      </div>
    );
  }
}

Book.propTypes = {
	book: PropTypes.object.isRequired
}

export default Book;
