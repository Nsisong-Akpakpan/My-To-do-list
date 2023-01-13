let oldBooksContainer = document.getElementById("bookListContainer");
let inputBox = document.querySelector(".add-book-input");
let searchBox = document.querySelector(".search");
let addBookBtn = document.querySelector(".submit-book");


let listOfBooks = ['Book1', 'Book2', 'Book3']


function displayBooks(searchText){

    oldBooksContainer.innerHTML = ''

    for (let i=0;i<listOfBooks.length;i++){
 
        let bookContainer = document.createElement('div')
        let p = document.createElement('p')
        let btn = document.createElement('span')

        btn.classList.add('del')
        btn.addEventListener('click',()=>{
            listOfBooks.splice(i, 1)
            storeBooks()
            displayBooks()
        })
        btn.innerHTML = 'Delete'

        p.classList.add('book')
        p.textContent = listOfBooks[i]

        bookContainer.classList.add('book-con')
 
        bookContainer.appendChild(p)
        bookContainer.appendChild(btn)

        if(listOfBooks[i].includes(searchText)){
            oldBooksContainer.appendChild(bookContainer)
        }

        if(searchText==null){
            oldBooksContainer.appendChild(bookContainer)
        }
    }
} 


function addBooks(){
    let userInput  = inputBox.value         
    if(userInput == '' || userInput ==null){
        alert('please type something')
    }else{
        listOfBooks.push(userInput)
        storeBooks()
        inputBox.value = ''
        displayBooks()
    }
     
}   

addBookBtn.addEventListener('click',addBooks)

displayBooks()

function storeBooks(){
    let stringArray = JSON.stringify(listOfBooks)
    localStorage.setItem('sessionStorageOfBooks',stringArray)
}
 


window.onload = ()=>{
    const stringOfBooks = localStorage.getItem('sessionStorageOfBooks')
    listOfBooks = JSON.parse(stringOfBooks)
    if(listOfBooks==null){
        listOfBooks = ['dfsfds']
    }
    displayBooks()
} 

searchBox.addEventListener('change',()=>{
    displayBooks(searchBox.value)
})


TODO 
// 1 Display total number of  books :: Hint create displayCount function
// 2 implement search using array filters 
// 3 store items using localStorage or sessionStorage 
// 4 check if user input is empty before adding a new book;