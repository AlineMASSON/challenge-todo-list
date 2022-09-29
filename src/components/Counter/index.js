// == Import
// npm
import React from 'react';
import PropTypesLib from 'prop-types';
// locaux
import './counter.scss';

// == Composant
function Counter({ counter }) {
  let message = 'Auncune tâche en cours';

  if (counter === 1) {
    message = '1 tâche en cours';
  }
  else if (counter > 1) {
    message = `${counter} tâches en cours`;
  }

  return (
    <p className="counter">{message}</p>
  );
}

Counter.propTypes = {
  counter: PropTypesLib.number.isRequired,
};

// == Export
export default React.memo(Counter);
