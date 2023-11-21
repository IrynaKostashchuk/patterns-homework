public class FixedLateFeeCalculator implements LateFeeCalculator{
    @Override
    public double calculateLateFee(int daysLate){
        return 2.5;
    }
}
