// Abstract class defining the template
class LibraryBookProcessor {
    // Template method with the processing steps
    processBook() {
        this.retrieveBook();
        this.updateStatus();
        this.calculateLateFee();
    }

    // Abstract methods to be implemented by subclasses
    retrieveBook() {}

    updateStatus() {}

    calculateLateFee() {}
}

// Concrete subclass implementing the template
class FixedLateFeeBookProcessor extends LibraryBookProcessor {
    retrieveBook() {
        console.log("Book retrieved from the shelf.");
    }

    updateStatus() {
        console.log("Book status updated.");
    }

    calculateLateFee() {
        console.log("Late fee calculated: $2.5 (Fixed)");
    }
}

class PercentageLateFeeBookProcessor extends LibraryBookProcessor {
    retrieveBook() {
        console.log("Book retrieved from the shelf.");
    }

    updateStatus() {
        console.log("Book status updated.");
    }

    calculateLateFee() {
        console.log("Late fee calculated: $0.5 per day (Percentage)");
    }
}

// Client code
// Create instances of concrete subclasses and process books
const fixedLateFeeProcessor = new FixedLateFeeBookProcessor();
const percentageLateFeeProcessor = new PercentageLateFeeBookProcessor();

// Process books with different processing steps
console.log("Processing book with fixed late fee:");
fixedLateFeeProcessor.processBook();

console.log("\nProcessing book with percentage late fee:");
percentageLateFeeProcessor.processBook();
