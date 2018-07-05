import React, { Component } from 'react'
import '../App.css'
import * as BooksAPI from '../BooksAPI'
import NoImage from '../icons/noimage2.jpg'


class BookItem extends Component {

    updateBook(book, newShelf) {

      BooksAPI.update(book, newShelf).then(res => {
        book.shelf = newShelf;
        this.props.onUpdateBookShelf(book);
      });
    }

    handleBookURL(book) {
      if (book.imageLinks)
        return `url(${book.imageLinks.thumbnail})`;
      else
        return `url(${NoImage})`;

    }

    render() {
        const { book } = this.props;

        return (
            <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.handleBookURL(book)}}></div>
              <div className="book-shelf-changer">
                <select onChange={(ev) => this.updateBook(book, ev.target.value)} defaultValue={book.shelf}>
                  <option value="move" disabled>Move to...</option>
                  <option value={BooksAPI.SHELF_CURRENTLY_READING}>Currently Reading</option>
                  <option value={BooksAPI.SHELF_WANT_TO_READ}>Want to Read</option>
                  <option value={BooksAPI.SHELF_READ}>Read</option>
                  <option value={BooksAPI.SHELF_NONE}>None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            {book.authors && book.authors.map(author => (<div key={author} className="book-authors">{author}</div>))}
          </div>
        )
    }
}

export default BookItem;