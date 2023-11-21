public class Book implements LibraryItem{
    @Override
    public void accept(LibraryItemVisitor libraryItemVisitor) {
        libraryItemVisitor.visit(this);
    }
}
