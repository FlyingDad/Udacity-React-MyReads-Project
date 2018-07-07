import React, { Component } from "react"
import Bookshelf from "./Bookshelf";

class Bookcase extends Component {

	state = {
		books: []
	}

componentWillReceiveProps(nextProps) {
	//console.log('Bookcase did update', nextProps)
	this.setState({books: nextProps})
}

  render() {
		//console.log('bookcase rendering', this.state.books)
    return (
      <div className="list-books-content">
        <div>
					{/* {console.log(this.props)} */}
          <Bookshelf books={this.state.books} shelfType="currentlyReading" shelfName="Currently Reading"/>
					<Bookshelf books={this.state.books} shelfType="wantToRead" shelfName="Want to Read"/>
					<Bookshelf books={this.state.books} shelfType="read" shelfName="Read"/>
        </div>
      </div>
    );
  }
}

export default Bookcase;
