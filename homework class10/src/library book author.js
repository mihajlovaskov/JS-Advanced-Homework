function Library(name, books, address, numberOfMembers, printBooks){
    this.nameOfLibrary = name;
    this.nameOfBook = books;
    this.addressOfLibrary = address;
    this.numberOfMembers = function numMem(){
        console.log(this.nameOfBook.length*15)}
    this.printBooksNames = function printBooks(){
        this.nameOfBook.forEach(b => console.log(b))
        }
}

let libraries = new Library("anyNameOfLibrary", ["Book1", "Book2", "Book3"], "anyAddressOfLibrary");
console.log(libraries);
libraries.printBooksNames();

function Books(title, genre, librariesB, authors, addLibrary, removeLibrary){
    this.titleOfBook = title;
    this.genreOfBook = genre;
    this.libraryOfBooks = librariesB;
    this.authorsOfBooks = authors;
    this.addLibrary = function addLibrary(newLibrary){
        this.libraryOfBooks.push(newLibrary)
        libraries.nameOfBook.push(this.titleOfBook);
    };
    this.removeLibrary = function removeLibrary(someLibrary){
        for (i=0; i<this.libraryOfBooks.length; i++){
            if(someLibrary==this.libraryOfBooks[i]){
                this.libraryOfBooks.splice(i,1)
            }
        }
        for (i=0; i<libraries.nameOfBook.length; i++)
           if(this.titleOfBook==libraries.nameOfBook[i]){
               libraries.nameOfBook.splice(i,1)
           }
   }
}

let books = new Books("anyTitleOfBook", "anyGenreOfBook", ["library1", "library2", "library3"], ["author1", "author2", "author3"])
console.log(books);
books.addLibrary("library4");
console.log(books);
books.removeLibrary("library4");
console.log(books);

function Author(fName,lName,birth,books,currentBook,startBook){
   this.firstName = fName;
   this.lastName = lName;
   this.yearOfBirth = birth;
   this.listOfBooks = books;
   this.newBook = currentBook;
   this.startBookFun = function startBook(newBookName){
       if(this.newBook == null){
            this.newBook = newBookName
        }
       else if (this.newBook != null) {
           this.listOfBooks.push(this.newBook);
           this.newBook = newBookName;
       }
   }
}
let authors = new Author("anyFirstName", "anyLastName", 1950, ["Book4", "Book5", "Book6"], null);
console.log(authors);
authors.startBookFun("Book7");
authors.startBookFun("Book8");
console.log(authors);

let newLibraries = Object.create(libraries);
libraries.addBook = function addBook(newNameOfBook){
    newLibraries.nameOfBook.push(newNameOfBook)
}
libraries.addBook("Book56")
console.log(newLibraries.nameOfBook);


