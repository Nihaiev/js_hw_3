const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line

const indexOfArr = this.books.indexOf(oldName);
      this.books.splice(indexOfArr, 1, newName);
      
    // Change code above this line
  },
};

console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
console.log(bookShelf.updateBook("The last kingdom", "Dune"));