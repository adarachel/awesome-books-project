/* eslint-diable */
class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  addBook = () => {
    // eslint-disable-next-line no-undef
    library.push(this);
  };

  removeBook = () => {
    // eslint-disable-next-line no-undef
    library = library.filter((book) => book.id !== this.id);
  };
}
export default Book;