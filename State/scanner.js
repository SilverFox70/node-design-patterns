'use strict';

const Book = require('./book');

let options = {
  'author': 'Enerst Hemingway',
  'title': 'The Sun Also Rises'
};

const book = Book(options);

book.scan();
book.scan();