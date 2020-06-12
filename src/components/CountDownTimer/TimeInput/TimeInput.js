import React from 'react';

import Button from '../../Button/Button';
import './TimeInput.scss';

const TimeInput = () => {
  return (
    <div className="time-input">
      <div><span>Countdown:</span></div>
      <div><input type="number" placeholder="(Min)"></input> </div>
      <Button text="START" />
    </div>
  )
};

export default TimeInput;
