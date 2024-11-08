import { useState } from "react";
import illustration from "./assets/images/illustration-empty.svg"
import calculator from "./assets/images/icon-calculator.svg"
function App() {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [totalist, setTotalist] = useState(null);
  const [totalistTwo, setTotalistTwo] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
   const [showResults, setShowResults] = useState(false);

  function myFunction() {
    const mortgageAmountNumber = parseFloat(mortgageAmount);
    const mortgageTermNumber = parseFloat(mortgageTerm);
    const interestRateNumber = parseFloat(interestRate);
    const monthlyInterestRate =  interestRate / (12 * 100) 
    const totalNumberOfPayments = mortgageTerm * 12
    const ust = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalNumberOfPayments);
    const alt = Math.pow(1 + monthlyInterestRate, totalNumberOfPayments) - 1;
    const repayment = mortgageAmount * (ust / alt)
    setTotalist(repayment.toFixed(2));
    setTotalistTwo((repayment * 24).toFixed(2))
    setShowResults(true);
  }
  
  function myFunctionTwo() {
    const mortgageAmountNumber = parseFloat(mortgageAmount);
    const mortgageTermNumber = parseFloat(mortgageTerm);
    const interestRateNumber = parseFloat(interestRate);
    const interestPayment =  interestRate / (12 * 100) 
    const totalInterestPayment = mortgageAmountNumber * interestPayment
    setTotalist(totalInterestPayment.toFixed(2))
    setTotalistTwo((totalInterestPayment * 24).toFixed(2))
    setShowResults(true);
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (selectedOption === 'Option 1') {
  //     myFunction();
  //   } else if (selectedOption === 'Option 2') {
  //     myFunctionTwo();
  //   }
  // };

  function clearAll() {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setTotalist(null);
    setTotalistTwo(null);
    setShowResults(false)
  }

  function handleChange(e) {
    setMortgageAmount(e.target.value);
  }

  function handleChangee(e) {
    setMortgageTerm(e.target.value);
  }

  function handleChangeee(e) {
    setInterestRate(e.target.value);
  }

  const handleSubmit = (event) => {
  event.preventDefault();
  if (!mortgageAmount || !mortgageTerm || !interestRate) {
    alert("Please fill in all fields with valid numbers.");
    return;
  }
  if (mortgageAmount <= 0 || mortgageTerm <= 0 || interestRate <= 0) {
    alert("Please enter positive values.");
    return;
  }
  selectedOption === 'Option 1' ? myFunction() : myFunctionTwo();
};

  return (
    <div className="mainApp">
    <div className="App">
      <header className="App-header">
        <div className="form-container">
          <div className="titleBar">
          <p className="mortgageP">Mortgage Calculator</p>
          <button type='button' className='clearAll' onClick={clearAll}>
            Clear All
          </button>
          </div> 
          <form className="firstForm">
            <label className="firstLabel">
              Mortgage Amount
              <div className="firstInputContainer">
                <span className="firstSpan">£</span>
                <input 
                  type="number"
                  value={mortgageAmount}
                  onChange={handleChange}
                  className="firstInput"
                />
              </div>
            </label>
          </form>
          <div className="gridContainer">
          <form className="secondForm">
            <label className="secondLabel">
              Mortgage Term
              <div className="secondInputContainer">
                <input 
                  type="number"
                  value={mortgageTerm}
                  onChange={handleChangee}
                  className="secondInput"
                />
                <span className="secondSpan">years</span>
              </div>
            </label>
          </form>
          <form className="interestRateForm">
            <label className="interestLabel">
              Interest Rate
            <div className="inputContainer">
              <span className="interestRateSpan">%</span>
              <input 
                type="number"
                value={interestRate}
                onChange={handleChangeee}
                className="inputInterestRate"
              />
            </div>
            </label>
          </form>
          </div>
          <div className="mortgageContainer">
        
            <form onSubmit={handleSubmit} className="repaymentForm">
              <label className="mortgageType">Mortgage Type</label>
              <label className="repaymentLabel">            
                <input
                  type="radio"
                  value="Option 1"
                  checked={selectedOption === 'Option 1'}
                  onChange={handleOptionChange}
                  className="repaymentInput"
                />
                Repayment
              </label>
              <label className="interestRateLabel">
                <input
                  type="radio"
                  value="Option 2"
                  checked={selectedOption === 'Option 2'}
                  onChange={handleOptionChange}
                  className="interestInput"
                />
                Interest Rate
              </label>
              <div className="submitDiv">
                
              <button 
                type="submit"
                className="submitButton"
              >
                <img src={calculator} alt="calculator" />
                Calculate Repayments</button>
                </div>
            </form>
          </div>
        </div>
        {!showResults &&( <div className="image-container">
        <div className="imgDiv">
          <img src={illustration} alt="Illustration" className="imgIllu" />
          <p className="plus-jakarta-sans-mert">Result shown here</p>
          <p className="plus-jakarta-sans-mertt">
            Complete the form and click “calculate repayments” to see what your monthly repayments would be.
          </p>
          <h1>{totalist}</h1>
          <h1>{totalistTwo}</h1>
          </div>
        </div> 
          )}
  {showResults && (
          <div className="successDiv">
            <div>
              <h3 className="yourResult">Your result</h3>
              <p className="yourResultP">Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
            </div>
            <div className="monthlyContainer">
              <div className="amountContainer">
                <p className="yourMonthly">Your monthly repayments</p>
                <h1 className="totalist">£{totalist}</h1>
              </div>
              <div className="middleLine"></div>
              <div className="amountContainer">
                <p className="yourMonthly">Total you'll repay over the term</p>
                <h2 className="totalistTwo">£{totalistTwo}</h2>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
    </div>
  );
}

export default App;
