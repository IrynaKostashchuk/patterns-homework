public abstract class LibraryBookProcessor {
    public final void processBook() {
        retrieveBook();
        updateStatus();
        calculateLateFee();
    }

    protected abstract void retrieveBook();

    protected abstract void updateStatus();

    protected abstract void calculateLateFee();
}
