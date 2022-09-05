let myArray = [{
    title: 'book1',
    author: 'author1',
    pages: 312,
    read: 'Not Read'
},
{
    title: 'book2',
    author: 'author2',
    pages: 243,
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