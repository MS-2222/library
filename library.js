//array containing book objects
let myArray = [{
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    pages: 448,
    read: 'Not Read'
},
{
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: 310,
    read: 'Read'
}];

arrayLoop();

//constructor for book objects
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//function to loop through array and display contents
function arrayLoop() {
myArray.forEach(book => {
    let content = document.querySelector('.content')
    let card = document.createElement('div')
    card.className = 'card'
    card.textContent = `Title: ${book.title}
Author: ${book.author}
Pages: ${book.pages}
Status: ${book.read}`
    content.appendChild(card)
});
};

//function to add book objects to library
let submit = document.querySelector('button');
submit.addEventListener('click', () => {
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('status').value
    let newBook = new Book(title, author, pages, read);
    myArray.push(newBook);
})

console.log(myArray);