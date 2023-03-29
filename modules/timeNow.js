import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

export default class Datenow {
  constructor() {
    this.timeContainer = document.querySelector('.date h4');
    this.dt = DateTime.now();
    const time = this.dt.toLocaleString(DateTime.DATETIME_MED);
    this.timeContainer.textContent = time;
  }

  update() {
    setInterval(() => {
      this.dt = DateTime.now();
      const time = this.dt.toLocaleString(DateTime.DATETIME_MED);
      this.timeContainer.textContent = time;
    }, 6000);
  }
}