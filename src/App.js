import React from 'react'
import './App.css'
import BookSearch from './components/BookSearch'
import BookShelves from './components/BookShelves'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.onUpdateBookShelf = this.onUpdateBookShelf.bind(this);
  }

  state = {
    shelvedBooks: []
  }
  
  componentDidMount() {
    BooksAPI.getAll().then(books => {
        this.setState({ shelvedBooks: books });
    });
  }

  onUpdateBookShelf = (book) => {
    this.setState(state => ({
      shelvedBooks: state.shelvedBooks.filter(b => b.id !== book.id).concat([book])
    }));
  }


  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <BookShelves books={this.state.shelvedBooks} onUpdateBookShelf={this.onUpdateBookShelf} />
        )} />

        <Route path="/search" render={() => (
          <BookSearch shelvedBooks={this.state.shelvedBooks} onUpdateBookShelf={this.onUpdateBookShelf} />
        )} />

      </div>
    )
  }
}

export default BooksApp
