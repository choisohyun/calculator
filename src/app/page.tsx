'use client';
import { KeyboardEventHandler, useState, ChangeEvent, FormEvent } from 'react';

function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(eval(input));
    setInput('');
  };

  const handleButtonClick = (value: string) => {
    switch (value) {
      case 'C':
        setInput('');
        setResult(0);
        break;
      case '=':
        try {
          setResult(eval(input));
          setInput(eval(input));
        } catch (error) {
          setResult(0);
        }
        break;
      default:
        setInput(input + value);
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    const key = e.key;
    if (key === 'Enter') {
      handleButtonClick('=');
    } else if (key === 'Escape') {
      handleButtonClick('C');
    } else if (key === 'Backspace') {
      setInput(input.slice(0, -1));
    } else if (!isNaN(Number(key))) {
      setInput(input + Number(key));
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      setInput(input + key);
    } else if (key === '.') {
      if (!input.includes('.')) {
        setInput(input + key);
      }
    }
  };

  return (
    <div className="calculator" onKeyDown={handleKeyDown}>
      <div className="display">{input}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('C')} className="button button-gray">C</button>
          <button onClick={() => handleButtonClick('-')} className="button button-gray">+/-</button>
          <button onClick={() => handleButtonClick('%')} className="button button-gray">%</button>
          <button onClick={() => handleButtonClick('÷')} className="button button-orange">÷</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('7')} className="button">7</button>
          <button onClick={() => handleButtonClick('8')} className="button">8</button>
          <button onClick={() => handleButtonClick('9')} className="button">9</button>
          <button onClick={() => handleButtonClick('×')} className="button button-orange">×</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')} className="button">4</button>
          <button onClick={() => handleButtonClick('5')} className="button">5</button>
          <button onClick={() => handleButtonClick('6')} className="button">6</button>
          <button onClick={() => handleButtonClick('-')} className="button button-orange">-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('1')} className="button">1</button>
          <button onClick={() => handleButtonClick('2')} className="button">2</button>
          <button onClick={() => handleButtonClick('3')} className="button">3</button>
          <button onClick={() => handleButtonClick('+')} className="button button-orange">+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('0')} className="button button-zero">0</button>
          <button onClick={() => handleButtonClick('.')} className="button">.</button>
          <button onClick={() => handleButtonClick('=')} className="button button-orange">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator
