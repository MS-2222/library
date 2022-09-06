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