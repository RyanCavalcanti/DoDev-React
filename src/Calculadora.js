import { useState } from 'react';
import './App.css';

function NumberInput({ label, value, onChange }) {
  return (
    <label>
      {label}
      <input
        type="number"
        value={value}
        onChange={e => onChange(Number(e.target.value))}
      />
    </label>
  );
}

function OperationButton({ operation, operate }) {
  return (
    <button onClick={operate}>{operation}</button>
  );
}

function Calculadora() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  const operations = {
    '+': () => setResult(firstNumber + secondNumber),
    '-': () => setResult(firstNumber - secondNumber),
    '*': () => setResult(firstNumber * secondNumber),
    '/': () => setResult(firstNumber / secondNumber),
  };

  return (
    <>
      <h1>Calculator</h1>
      <div className="card">
        <NumberInput
          label="First Number"
          value={firstNumber}
          onChange={setFirstNumber}
        />
        <NumberInput
          label="Second Number"
          value={secondNumber}
          onChange={setSecondNumber}
        />
        <span>Result: {result}</span>
      </div>
      {Object.entries(operations).map(([operation, func]) => (
        <OperationButton key={operation} operation={operation} operate={func} />
      ))}
    </>
  );
}

export default Calculadora;
