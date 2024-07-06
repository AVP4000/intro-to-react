import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';

export default function Counter({ title }) {
  const [value, setValue] = useState(0);

  const handleClick = (button) => {
    switch (button) {
      case 'Increment':
        setValue((prevState) => prevState + 1);
        break;
      case 'Decrement':
        setValue((prevState) => prevState - 1);
        break;
      case 'Reset':
        setValue(0);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h1>{title}</h1>
      <h2>{value}</h2>
      <Button onClick={() => handleClick('Increment')}>Increment</Button>
      <Button disabled={value === 0} onClick={() => handleClick('Decrement')}>Decrement</Button>
      <Button onClick={() => handleClick('Reset')}>Reset</Button>
    </>
  );
}

Counter.propTypes = {
  title: PropTypes.string,
};

Counter.defaultProps = {
  title: 'My Counter',
};
