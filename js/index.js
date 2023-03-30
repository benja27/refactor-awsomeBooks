import { DateTime } from '../modules/luxon.js';
import PushBook from '../modules/saveBook.js';
import ShowBooksClass from '../modules/showBooks.js';
import RemoveBook from '../modules/remove.js';

const remove = new RemoveBook();
let local = localStorage.getItem('collection') || [];
const ShowBooks = new ShowBooksClass();

const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.querySelector('.date h4').textContent = now;
setInterval(() => {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  document.querySelector('.date h4').textContent = now;
}, 6000);

document.addEventListener('DOMContentLoaded', () => {
  ShowBooks.show(local);
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
