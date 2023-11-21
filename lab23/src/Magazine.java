public class Magazine implements LibraryItem{
    @Override
    public void accept(LibraryItemVisitor libraryItemVisitor) {
        libraryItemVisitor.visit(this);
    }
}
