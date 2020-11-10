import React from 'react';
import {func, string} from 'prop-types';

const Toggle=({theme, toggleTheme}) => {
  return (
    <button aria-label='toggle page themes button' className='toggle-btn' onClick={toggleTheme} >
      {theme.slice(0, 1).toUpperCase()+theme.slice(1)}
    </button>
  );
};

Toggle.propTypes={
  theme: string.isRequired,
  toggleTheme: func.isRequired
}

export default Toggle;
