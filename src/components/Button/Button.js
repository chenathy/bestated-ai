import React from 'react';
import './Button.css';


const Button = ({ textDisplay, onClick, type = 'button', state = 'primary', disabled = false }) => {
    return (
        <button
            className={`${type} ${state}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {textDisplay}
        </button>
    );
};
  
  export default Button;