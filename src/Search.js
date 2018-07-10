import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
//import PropTypes from "prop-types"

class Search extends Component {
  state = {
		results: []
  };

  updateQuery = (query) => {
		///console.log(query)
		if(query){
		BooksAPI.search(query).then(response => {
			//console.log(response.error)
			if(!response.error){
				this.setState({results: response})
			} else {
				//console.log("error response")
				this.clearQuery()
			}
		})} else {
			//console.log('clearing q')
			this.clearQuery()
		}
	}

  clearQuery = () => {
    this.setState({results: []});
	}
	
	onMoveBook(){
		this.props.onCancelSearch()
	}

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a
            className="close-search"
            onClick={this.props.onCancelSearch}
          >
            Close
          </a>
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
									<Book bookshelf='none' book={book} onBookshelfChange={this.onMoveBook.bind(this)}/>
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
	onCancelSearch: PropTypes.func.isRequired
}


export default Search;
