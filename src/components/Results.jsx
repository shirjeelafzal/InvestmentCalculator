import { calculateInvestmentResults, formatter} from "../util/investment";
export default function Result({userInput}) {
    const results = calculateInvestmentResults(userInput);
    if (!results || results.length === 0) {
        return <p className="center">No results available</p>;  // Optionally, display a message if no results
    }
    const initialInvestment = results[0].valueEndOfYear- results[0].interest- results[0].annualInvestment;

    return (
        results.length >0 && (
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
                {results.map((result) => {
                const totalInterest = result.valueEndOfYear - (result.year * result.annualInvestment) - initialInvestment
                return(
                    <tr key={result.year}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(result.annualInvestment)}</td>
                    </tr>
                    )
    })}
            </tbody>
            </table>
        )
    );
}