function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    return renderBooks(response.json)})

  // .then((response) => response.json())
  // .then((json) => renderBooks(json));
  // To pass the tests, don't forget to return your fetch!
  //fetch request GOT api
  //returned response should be converted to .json
  //calls second function renderBooks(JSON-data)
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
