export default class ShowBooksClass {
  show(local) {
    this.local = local;
    this.local = JSON.parse(this.local);
    if (this.local.length === 0) {
      const container = document.querySelector('.bookListCont');
      container.innerHTML = '';
      const content = document.createElement('h3');
      content.textContent = 'You have not submitted books yet';
      content.className = 'fs-3 py-4 text-center';
      container.append(content);
    } else {
      const container = document.querySelector('.bookListCont');
      container.textContent = '';
      this.local.forEach((element, index) => {
        const div = document.createElement('div');
        div.className = 'book';
        const textContent = document.createElement('p');
        textContent.className = 'fs- bold m-0 input-txt';
        textContent.textContent = `${element.title} by ${element.author}`;
        const button = document.createElement('button');
        button.textContent = 'remove';
        button.className = 'remove';
        button.setAttribute('data-id', `${index}`);
        div.append(textContent, button);
        container.appendChild(div);
        // location.reload()
      });
    }
  }
}