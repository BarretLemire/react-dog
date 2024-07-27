import React, { useState } from 'react';
import golden from '../assets/golden.svg'; // Your actual SVG

const DogAgeCalculator: React.FC = () => {
  const [humanYears, setHumanYears] = useState<number | string>('');
  const [dogYears, setDogYears] = useState<number | string>('');

  const calculateDogYears = (humanYears: number) => {
    return humanYears * 7;
  };

  const handleCalculate = () => {
    if (typeof humanYears === 'number') {
      setDogYears(calculateDogYears(humanYears));
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={golden} alt="Dog Face" style={{ width: '100px', height: '100px' }} />
        <div style={{ marginLeft: '20px' }}>
          <p>This is my age in human years:</p>
          <input
            type="number"
            value={humanYears}
            onChange={(e) => setHumanYears(Number(e.target.value))}
            style={{ display: 'block', margin: '10px auto' }}
          />
        </div>
      </div>

      <button onClick={handleCalculate} style={{ marginTop: '20px' }}>Calculate</button>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
        <img src={golden} alt="Dog Face" style={{ width: '100px', height: '100px' }} />
        <div style={{ marginLeft: '20px' }}>
          <p>This is my age in dog years:</p>
          <input type="number" value={dogYears} readOnly style={{ display: 'block', margin: '10px auto' }} />
        </div>
      </div>
    </div>
  );
};

export default DogAgeCalculator;
