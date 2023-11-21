public interface LibraryItemVisitor {
    void visit(Book book);

    void visit(Magazine magazine);
}
