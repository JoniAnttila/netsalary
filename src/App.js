import './App.css';
import {useState} from 'react';

function App() {
  const [salary, setSalary] = useState(0);
  const [tax, setTax] = useState(0);
  const [pension, setPension] = useState(0.25);
  const [insurance, setInsurance] = useState(0.25);
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let vero = salary * (tax / 100)
    let maksu = salary * (pension / 100)
    let vakuutus = salary * (insurance / 100)
    let tulos = salary - vero - maksu - vakuutus
    setResult(tulos);
  }




  return (
    <div className="container pt-4">
      <h3>Loan calculator</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label class="form-label">Salary</label>
          <input name="salary" type="number" value={salary} onChange={e => setSalary(e.target.value)} class="form-control"></input>
        </div>
        <div>
          <label class="form-label">Tax (%)</label>
          <input name="tax" type="number" value={tax} onChange={e => setTax(e.target.value)} class="form-control"></input>
        </div>
        <div>
          <label class="form-label">Pension (%)</label>
          <select name="pension" value={pension} onChange={e => setPension(e.target.value)} class="form-select">
          <option value="0.25">0.25 %</option>
            <option value="0.5">0.50 %</option>
            <option value="1">1.00 %</option>
            <option value="2">2.00 %</option>
            <option value="3.5">3.50 %</option>
            <option value="5">5.00 %</option>
          </select>
        </div>
        <div>
          <label class="form-label">Insurance (%)</label>
          <select name="insurance" value={insurance} onChange={e => setInsurance(e.target.value)} class="form-select">
            <option value="0.25">0.25 %</option>
            <option value="0.5">0.50 %</option>
            <option value="1">1.00 %</option>
            <option value="2">2.00 %</option>
            <option value="3.5">3.50 %</option>
            <option value="5">5.00 %</option>
          </select>
        </div>
        <div>
          <label class="form-label">Your salary after payments</label>
          <output class="form-control">{result}</output>
        </div>
        <button class="mt-2 btn btn-primary">Calculate</button>
      </form>
    </div>
  );
}

export default App;
