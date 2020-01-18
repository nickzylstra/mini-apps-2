import React, { useState } from 'react';


const RollInput = (props) => {
  const { addRoll } = props;
  const [pinCount, setPinCount] = useState('');
  const [isValidInput, setIsValidInput] = useState(true);

  const handleChange = (e) => {
    const { value } = e.target;

    if (value === '') {
      setPinCount('');
      setIsValidInput(true);
      return;
    }

    try {
      const num = parseInt(value, 10);
      if (num >= 0 && num <= 10) {
        setPinCount(num);
        setIsValidInput(true);
      } else {
        throw new Error();
      }
    } catch (error) {
      setIsValidInput(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && isValidInput) {
      addRoll(pinCount);
    }
  };

  const alert = !isValidInput
    ? <div className="alert alert-danger">Please enter a number between 0 and 10.</div>
    : '';

  return (
    <div className="container">
      <input
        className="formControl"
        value={pinCount}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter pins bowled..."
      />
      {alert}
    </div>
  );
};

export default RollInput;
