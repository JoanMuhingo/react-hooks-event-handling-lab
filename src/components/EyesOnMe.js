// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
  function handleFocus() {
    console.log('Good!');
  }

  function handleBlur() {
    console.log('Hey! Eyes on me!');
  }

  return (
    <button type='button' onFocus={handleFocus} onBlur={handleBlur}>
      Eyes On Me
    </button>
  );
}

export default EyesOnMe;