public class Main {
    public static void main(String[] args) {

        LibraryBookProcessor fixedLateFeeProcessor = new FixedLateFeeBookProcessor();
        LibraryBookProcessor percentageLateFeeProcessor = new PercentageLateFeeBookProcessor();

        System.out.println("Processing book with fixed late fee:");
        fixedLateFeeProcessor.processBook();

        System.out.println("\nProcessing book with percentage late fee:");
        percentageLateFeeProcessor.processBook();

    }
}