import React, { Component } from "react"
import * as BooksAPI from './BooksAPI'
import PropTypes from "prop-types"
import MoveSelect from "./Moveselect"
import Stars from "./Stars"

class Book extends Component {

	state={
		title: 'Title not provided',
		author: 'No author provided',
		imageUrl: '',
		averageRating: 0,
		searching: false,
	}

	//componentWillReceiveProps(nextProps) {
		//console.log(nextProps)
		//this.setState({book: nextProps})
	//}

	componentDidMount(){
		this.validateBookData()
	}

	validateBookData() {
		if(this.props.book.title) this.setState({title: this.props.book.title})
		if(this.props.book.authors) this.setState({author: this.props.book.authors[0]})
		if(this.props.book.imageLinks) this.setState({imageUrl: this.props.book.imageLinks.thumbnail})
		if(this.props.book.averageRating) this.setState({averageRating: this.props.book.averageRating})
	}
	
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
    //console.log(this.props.book)
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                "url(" + this.state.imageUrl + ")"
            }}
          />
          <MoveSelect
            bookshelf={this.props.bookshelf}
            onMoveBook={this.onMoveBook.bind(this)}
            onBookshelfChange={this.props.onBookshelfChange}
          />
        </div>
        <div className="book-title">{this.state.title}</div>
        <div className="book-authors">{this.state.author}</div>
        <Stars rating={this.state.averageRating} />
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onBookshelfChange: PropTypes.func.isRequired
};

export default Book;
