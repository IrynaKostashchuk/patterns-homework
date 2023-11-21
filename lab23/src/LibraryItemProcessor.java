public class LibraryItemProcessor implements LibraryItemVisitor{
    @Override
    public void visit(Book book) {
        System.out.println("Processing book: " + book.toString());
    }

    @Override
    public void visit(Magazine magazine) {
        System.out.println("Processing magazine: " + magazine.toString());
    }
}
