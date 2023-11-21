public class FixedLateFeeBookProcessor extends LibraryBookProcessor{
    @Override
    protected void retrieveBook() {
        System.out.println("Book retrieved from the shelf.");
    }

    @Override
    protected void updateStatus() {
        System.out.println("Book status updated.");
    }

    @Override
    protected void calculateLateFee() {
        System.out.println("Late fee calculated: $2.5 (Fixed)");
    }
}
