// src/BMICalculator.jsx
import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
      if (bmiValue < 18.5) {
        setMessage('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage('Overweight');
      } else {
        setMessage('Obesity');
      }
    } else {
      setMessage('Please enter valid height and weight');
    }
  };

  const clearFields = () => {
    setHeight('');
    setWeight('');
    setBMI(null);
    setMessage('');
  };

  return (
    <div className="calculator-container">
      <h1>BMI Calculator</h1>
      <div>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
      </div>
      <button className="calculate" onClick={calculateBMI}>Calculate BMI</button>
      <button className="clear" onClick={clearFields}>Clear</button>
      {bmi && (
        <div>
          <h2>Your BMI is: {bmi}</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
