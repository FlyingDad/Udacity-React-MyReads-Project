import React, { Component } from "react";
import MDstar from 'react-icons/lib/md/star'
import MDstarHalf from 'react-icons/lib/md/star-half'

class Book extends Component {
	
	// Build up JSX star icons for the rating, 
	// using react-icons from Material Design
	averageRating(book){
		if(book.hasOwnProperty('averageRating')){
			let stars=[]
			for(let i= 0; i < Math.floor(book.averageRating); i++){
				stars.push(<span key={i} className="star-rating"><MDstar /></span>)					
			}
			if(book.averageRating % 1){
				stars.push(<span key={6} className="star-rating"><MDstarHalf /></span>)
			}
			return (			
				stars
			)
		} else {
			return (
				<div className="no-ratings">
				No ratings
			</div>
			)
		}
	}
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
				{this.averageRating(this.props.book)}
      </div>
    );
  }
}

export default Book;
