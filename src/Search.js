import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
//import PropTypes from "prop-types"

class Search extends Component {
  state = {
		results: []
  };

  updateQuery = (query) => {
		//If there is a query, search the API then compare to mybooks
		if(query){
		BooksAPI.search(query).then(response => {
			if(!response.error){
				this.compareToMybooks(response)
			} else {
				this.clearQuery()
			}
		})} else {
			this.clearQuery()
		}
	}

	// Check search results against myBooks so we can set the correct select value
	// if match, we swap our book into the results to current selection is correct
	compareToMybooks(response){
		response.forEach(book => {
			this.props.myBooks.forEach(myBook => {
				if(book.id === myBook.id){
					book.shelf = myBook.shelf
				}
			})
		})
		this.setState({results: response})
	}

  clearQuery = () => {
    this.setState({results: []});
	}
	
	onMoveBook(){
		
	}

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
						to='/'
            className="close-search"
            onClick={this.props.onCancelSearch}
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
					<p>{this.state.results.length} results (max 20)</p>
          <ol className="books-grid">
							{this.state.results ?(this.state.results.map(book =>{
								//console.log('results',this.state.results)
								return (
								<li key={book.id}>
									<Book bookshelf={book.shelf?book.shelf:'none'} book={book} onBookshelfChange={this.onMoveBook.bind(this)}/>
								</li>
							)})):(
            <li>No results</li>
							)}
          </ol>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
	onCancelSearch: PropTypes.func.isRequired,
	myBooks: PropTypes.array.isRequired
}


export default Search;
