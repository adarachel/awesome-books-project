if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }

/*eslint-disable*/
import Book from './modules/books.js';
import './modules/app.js'
import { DateTime } from './modules/luxon.js';

const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('current-date').innerHTML = currentDate;