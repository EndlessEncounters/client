import React from 'react';
import {func, string} from 'prop-types';
//import styled from 'styled-components';

const Toggle=({theme, toggleTheme}) => {
  return (
    <button id='theme-toggler' className={theme} onClick={toggleTheme} aria-label="Toggle page theme button">
      {/* {theme.slice(0, 1).toUpperCase()+theme.slice(1)} */}
      {theme==='light'? 'Dark':'Light'}
    </button>
  );
};

Toggle.propTypes={
  theme: string.isRequired,
  toggleTheme: func.isRequired
}

export default Toggle;
