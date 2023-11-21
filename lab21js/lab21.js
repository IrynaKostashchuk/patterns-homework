// Define the strategy interface
class LateFeeCalculator {
    calculateLateFee(daysLate) {}
}

// Concrete strategy implementations
class FixedLateFeeCalculator extends LateFeeCalculator {
    calculateLateFee(daysLate) {
        return 2.5; // Fixed late fee
    }
}

class PercentageLateFeeCalculator extends LateFeeCalculator {
    calculateLateFee(daysLate) {
        return 0.5 * daysLate; // 0.5 per day late fee
    }
}

// Context class that uses the strategy
class LibraryBook {
    constructor(lateFeeCalculator) {
        this.lateFeeCalculator = lateFeeCalculator;
    }

    calculateLateFee(daysLate) {
        return this.lateFeeCalculator.calculateLateFee(daysLate);
    }
}

// Client code
// Create library books with different late fee calculation strategies
const book1 = new LibraryBook(new FixedLateFeeCalculator());
const book2 = new LibraryBook(new PercentageLateFeeCalculator());

// Calculate late fees for different scenarios
console.log(`Late fee for book1 (Fixed late fee): $${book1.calculateLateFee(5)}`);
console.log(`Late fee for book2 (0.5 per day): $${book2.calculateLateFee(7)}`);
