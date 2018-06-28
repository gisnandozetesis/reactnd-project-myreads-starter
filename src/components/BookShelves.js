import React, { Component } from 'react'
import BookShelf from './BookShelf'
import '../App.css'
import * as BooksAPI from '../BooksAPI'

class BookShelves extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({ books: books })
        });
    }

    render() {

        const { books } = this.state;

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf title="Currently Reading" books={books.filter(b => b.shelf === BooksAPI.CURRENTLY_READING)} />
                <BookShelf title="Want to Read" books={books.filter(b => b.shelf === BooksAPI.WANT_TO_READ)} />
                <BookShelf title="Read" books={books.filter(b => b.shelf === BooksAPI.READ)} />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>

        );
    }
}

export default BookShelves;