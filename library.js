
let myArray = [];
let idCount = 0;

let content = document.querySelector('.content')
arrayLoop();

//constructor for book objects
function Book(title, author, pages, read, idNum) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.idNum = idNum
}

//function to loop through array and display contents
function arrayLoop() { 
    myArray.forEach(book => {
        let card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `${book.title}\n ${book.author}\n ${book.pages} pages`
        let readButton = document.createElement('button')
        if(book.read === 'Read') {
            readButton.innerHTML = 'Read'
            readButton.style.backgroundColor = 'green';
        }
        else if(book.read === 'Not Read') {
            readButton.innerHTML = 'Not Read'
            readButton.style.backgroundColor = 'red'
        }
        readButton.className = 'readButton'
        readButton.id = `${book.idNum}`
        card.appendChild(readButton)
        let delButton = document.createElement('button')
        delButton.className = 'delButton'
        delButton.id = `${book.idNum}`
        delButton.innerHTML = 'Delete'
        card.appendChild(delButton)
        content.appendChild(card)
    });
};

//function to add book objects to library
let submit = document.querySelector('#addBook');
submit.addEventListener('click', () => {
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('status').value
    let idNum = idCount
    let newBook = new Book(title, author, pages, read, idNum);
    myArray.push(newBook);
    content.innerHTML = ''
    arrayLoop()
    readToggle()
    delButton()
    idCount++
})

//function to delete book objects from array
function delButton() {
    let delNodes = document.querySelectorAll('.delButton');
    let delButtons = Array.from(delNodes)
    delButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            let number = (this.id)
            let index = myArray.findIndex(Book => Book.idNum == number)
            myArray.splice(index, 1)
            content.innerHTML = ''
            arrayLoop()
            delButton()
            readToggle()
        })
    })
}

function readToggle() {
    let readNodes = document.querySelectorAll('.readButton')
    let readButtons = Array.from(readNodes)
    readButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            let number = (this.id)
            let index = myArray.findIndex(Book => Book.idNum == number)
            if(button.innerHTML === 'Read') {
                button.innerHTML = 'Not Read'
                button.style.backgroundColor = 'red'
                myArray[index].read = 'Not Read'
            }
            else if(button.innerHTML === 'Not Read') {
                button.innerHTML = 'Read'
                button.style.backgroundColor = 'green'
                myArray[index].read = 'Read'
            }
        })
    })
}