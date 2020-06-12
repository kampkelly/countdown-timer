import React from 'react';

import Button from '../../Button/Button';
import './SpeedRegulator.scss';

const SpeedRegulator = () => {
  return (
    <div className="speed-regulator">
      <div><Button selected="selected" text="1X" /></div>
      <div><Button text="1.5X" /></div>
      <div><Button text="2X" /></div>
    </div>
  )
};

export default SpeedRegulator;
