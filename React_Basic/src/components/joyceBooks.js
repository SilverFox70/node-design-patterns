'use strict';

const React = require('react');
const Link = require('react-router-dom').Link;

const books = [
  'Dubliners',
  'A Portait of the Artist as a Young Man',
  'Exiles and Poetry',
  'Ulysses',
  'Finnegans Wake'
];

class JoyceBooks extends React.Component {
  render() {
    return (
      <div>
        <h2>James Joyce's major works</h2>
        <ul className="books">{
          books.map((book, key) => 
            <li className="book" key={key}>{book}</li>
          )
        } </ul>
        <Link to="/">Go back to index</Link>
      </div>
    );
  }
}

module.exports = JoyceBooks;