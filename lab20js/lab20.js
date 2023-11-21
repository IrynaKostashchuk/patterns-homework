class Book {
    constructor() {
        this.currentState = new AvailableState();
    }

    setState(newState) {
        this.currentState = newState;
    }

    displayStatus() {
        this.currentState.displayStatus();
    }

    borrowBook() {
        this.currentState.borrowBook(this);
    }

    returnBook() {
        this.currentState.returnBook(this);
    }

    reserveBook() {
        this.currentState.reserveBook(this);
    }
}

class BookState {
    displayStatus() {}

    borrowBook(book) {}

    returnBook(book) {}

    reserveBook(book) {}
}

class AvailableState extends BookState {
    displayStatus() {
        console.log("Book is Available");
    }

    borrowBook(book) {
        console.log("Book is borrowed.");
        book.setState(new BorrowedState());
    }

    returnBook(book) {
        console.log("Book is already available.");
    }

    reserveBook(book) {
        console.log("Book is reserved.");
        book.setState(new ReservedState());
    }
}

class BorrowedState extends BookState {
    displayStatus() {
        console.log("Book is Borrowed");
    }

    borrowBook(book) {
        console.log("Book is already borrowed.");
    }

    returnBook(book) {
        console.log("Book is returned. Now available.");
        book.setState(new AvailableState());
    }

    reserveBook(book) {
        console.log("Book is already borrowed. Cannot reserve.");
    }
}

class ReservedState extends BookState {
    displayStatus() {
        console.log("Book is Reserved");
    }

    borrowBook(book) {
        console.log("Book is reserved. Cannot borrow.");
    }

    returnBook(book) {
        console.log("Reserved book cannot be returned. Wait for availability.");
    }

    reserveBook(book) {
        console.log("Book is already reserved.");
    }
}


const book = new Book();

book.displayStatus();

book.borrowBook();
book.displayStatus();

book.returnBook();
book.displayStatus();

book.reserveBook();
book.displayStatus();
