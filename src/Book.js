import React, { Component } from "react"
import * as BooksAPI from './BooksAPI'
import PropTypes from "prop-types"
import MoveSelect from "./Moveselect"
import Stars from "./Stars"

class Book extends Component {

	// state={
	// 	book: this.props.book
	// }

	//componentWillReceiveProps(nextProps) {
		//console.log(nextProps)
		//this.setState({book: nextProps})
	//}
	
	onMoveBook(value) {
		//console.log("book move", value);
		//console.log(this.props.book)
		// Update book through api
		BooksAPI.update(this.props.book, value).then(response => {
			//console.log(response)
			this.props.onBookshelfChange(response)
		})

		// book: <Object> containing at minimum an id attribute
		// shelf: <String> contains one of ["wantToRead", "currentlyReading", "read"]
		// Returns a Promise which resolves to a JSON object containing the response data of the POST request

		// Call fetch in App to refresh
  }

  render() {
    //console.log(this.props.book.averageRating)
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                "url(" + this.props.book.imageLinks.thumbnail + ")"
            }}
          />
          <MoveSelect
            bookshelf={this.props.bookshelf}
            onMoveBook={this.onMoveBook.bind(this)}
            onBookshelfChange={this.props.onBookshelfChange}
          />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors[0]}</div>
        <Stars rating={this.props.book.averageRating} />
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onBookshelfChange: PropTypes.func.isRequired
};

export default Book;
