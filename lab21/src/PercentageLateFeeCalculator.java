public class PercentageLateFeeCalculator implements LateFeeCalculator{
    @Override
    public double calculateLateFee(int daysLate) {
        return 0.5 * daysLate;
    }
}
