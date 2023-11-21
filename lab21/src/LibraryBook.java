public class LibraryBook {
    private final LateFeeCalculator lateFeeCalculator;

    public LibraryBook(LateFeeCalculator lateFeeCalculator) {
        this.lateFeeCalculator = lateFeeCalculator;
    }

    public double calculateLateFee(int daysLate) {
        return lateFeeCalculator.calculateLateFee(daysLate);
    }
}
