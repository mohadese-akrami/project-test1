import React, { useRef, useState } from 'react';
import './VerificationCode.css'; // Import CSS file for styling

const Verification = () => {
  // State to store verification code
  const [code, setCode] = useState(['', '', '', '']);

  // Refs for number fields
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  // Function to handle input change
  const handleChange = (index, value) => {
    // Update the code state
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move focus to the next input field
    if (value !== '' && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  // Function to handle clear button click
  const handleClear = () => {
    // Reset the code state and move focus to the first input field
    setCode(['', '', '', '']);
    inputRefs[0].current.focus();
  };

  // Function to handle verify button click
  const handleVerify = () => {
    // Combine the digits to form the code
    const verificationCode = code.join('');
    // Perform verification logic here (e.g., send code to server)
    console.log('Verifying code:', verificationCode);
  };

  return (
    <div className="verification-container">
      <h2>Enter Your 4-Digit Verification Code</h2>
      <div className="verification-inputs">
        {code.map((digit, index) => (
          <input
            key={index}
            type="number"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            ref={inputRefs[index]}
          />
        ))}
      </div>
      <div className="verification-buttons">
        <button className="verify-button" onClick={handleVerify}>VERIFY CODE</button>
        <button className="clear-button" onClick={handleClear}>CLEAR</button>
      </div>
    </div>
  );
};

export default Verification;
