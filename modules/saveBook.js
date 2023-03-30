export default class PushBook {
  constructor() {
    this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
    this.bookList = JSON.parse(localStorage.getItem('collection')) || [];
  }

  add() {
    this.book = {
      title: this.title,
      author: this.author,
    };
    this.bookList.push(this.book);
    localStorage.setItem('collection', JSON.stringify(this.bookList));
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
}