class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  addBook = () => {
    library.push(this);
  };

  removeBook = () => {
    library = library.filter((book) => book.id !== this.id);
  };
}
export default Book;