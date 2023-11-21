public class Main {
    public static void main(String[] args) {
        Book book = new Book();
        Magazine magazine = new Magazine();
        LibraryItemVisitor libraryItemVisitor = new LibraryItemProcessor();
        book.accept(libraryItemVisitor);
        magazine.accept(libraryItemVisitor);

    }
}