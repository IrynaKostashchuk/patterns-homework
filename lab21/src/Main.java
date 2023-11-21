public class Main {
    public static void main(String[] args) {
        LibraryBook book1 = new LibraryBook(new FixedLateFeeCalculator());
        LibraryBook book2 = new LibraryBook(new PercentageLateFeeCalculator());

        System.out.println("Late fee for book1 (Fixed late fee): $" + book1.calculateLateFee(5));
        System.out.println("Late fee for book2 (0.5 per day): $" + book2.calculateLateFee(7));
    }

}