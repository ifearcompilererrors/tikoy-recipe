import React, { useState } from 'react';
import './style.css';

const Button = ({ size, handleClick, children, className, disabled, tmpDisableOnClick }) => {
  const [isSubmitDisabled, setSubmitDisabled] = useState(false);

  const handleButtonOnClick = () => {
    if (tmpDisableOnClick) {
      // disable button for 5 seconds
      setSubmitDisabled(true);
      disableTimeout();
    }

    if (handleClick) handleClick();
  };

  // create a disabled timeout for 5 seconds
  const disableTimeout = () => setTimeout(() => setSubmitDisabled(false), 5000);

  return (
    <button disabled={disabled || isSubmitDisabled} className={`${size ? size : 'md'} ${className ?? ''}`} onClick={handleButtonOnClick}>
      {children}
    </button>
  );
};

export default Button;
