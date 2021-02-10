import React from 'react';
import './style.css';

const Button = ({ size, handleClick, children, className, disabled }) => (
  <button disabled={disabled} className={`${size ? size : 'md'} ${className ?? ''}`} onClick={handleClick}>
    {children}
  </button>
);

export default Button;
