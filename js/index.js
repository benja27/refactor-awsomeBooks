import { pushBook } from "../modules/saveBook.js"
import showBooks from "../modules/showBooks.js"
import removeBook from "../modules/remove.js"
import Datenow from "../modules/timeNow.js"


let remove = new removeBook()
let local = localStorage.getItem("collection") || [] ;
let ShowBooks = new showBooks()
let timeof = new Datenow();


document.addEventListener('DOMContentLoaded',e=>{        
  ShowBooks.show(local)  
  timeof.update()  
})

document.getElementById('form').addEventListener('submit', e=>{  
  e.preventDefault()  
  const Book = new pushBook()    
  Book.add()  
  local = localStorage.getItem("collection") 
  ShowBooks.show(local)    
})

document.querySelector(".bookListCont").addEventListener('click',e=>{  
  if(e.target.matches(".remove")){
    let index = e.srcElement.dataset.id    
    remove.remove(local,index)
    local = localStorage.getItem("collection")
    ShowBooks.show(local)      
  }
})

