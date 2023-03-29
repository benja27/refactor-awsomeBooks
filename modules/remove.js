export default class RemoveBook {
  remove(local, index) {
    this.local = JSON.parse(local);
    this.local.splice(index, 1);
    localStorage.setItem('collection', JSON.stringify(this.local));
  }
}