class LibraryItemVisitor {
    visitBook(book) {}

    visitMagazine(magazine) {}
}

class LibraryItem {
    accept(libraryItemVisitor) {}
}


class Book extends LibraryItem {
    accept(libraryItemVisitor) {
        libraryItemVisitor.visitBook(this);
    }
}

class Magazine extends LibraryItem {
    accept(libraryItemVisitor) {
        libraryItemVisitor.visitMagazine(this);
    }
}

class LibraryItemProcessor extends LibraryItemVisitor {
    visitBook(book) {
        console.log("Processing book: " + book.toString());
    }

    visitMagazine(magazine) {
        console.log("Processing magazine: " + magazine.toString());
    }
}


const book = new Book();
const magazine = new Magazine();

const libraryItemVisitor = new LibraryItemProcessor();


book.accept(libraryItemVisitor);
magazine.accept(libraryItemVisitor);
