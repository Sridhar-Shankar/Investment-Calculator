import { calculateInvestmentResults, formatter } from "../util/investment";

const Result = ({ input }) => {
  const results = calculateInvestmentResults(input);

  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <main>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map(
            ({ year, interest, valueEndOfYear, annualInvestment }) => {
              const totalInterest =
                valueEndOfYear - annualInvestment * year - initialInvestment;
              const totalAmountInvested = valueEndOfYear - interest;

              return (
                <tr key={year}>
                  <th> {year}</th>
                  <th> {formatter.format(valueEndOfYear)}</th>
                  <th> {formatter.format(interest)}</th>
                  <th> {formatter.format(totalInterest)}</th>
                  <th> {formatter.format(totalAmountInvested)}</th>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </main>
  );
};

export default Result;
