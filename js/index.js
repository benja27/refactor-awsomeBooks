import PushBook from '../modules/saveBook.js';
import ShowBooksClass from '../modules/showBooks.js';
import RemoveBook from '../modules/remove.js';
import Datenow from '../modules/timeNow.js';

const remove = new RemoveBook();
let local = localStorage.getItem('collection') || [];
const ShowBooks = new ShowBooksClass();
const timeof = new Datenow();

document.addEventListener('DOMContentLoaded', () => {
  ShowBooks.show(local);
  timeof.update();
});

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const Book = new PushBook();
  Book.add();
  local = localStorage.getItem('collection');
  ShowBooks.show(local);
});

document.querySelector('.bookListCont').addEventListener('click', (e) => {
  if (e.target.matches('.remove')) {
    const index = e.srcElement.dataset.id;
    remove.remove(local, index);
    local = localStorage.getItem('collection');
    ShowBooks.show(local);
  }
});
