import React from 'react';

import Display from './Display/Display';
import SpeedRegulator from './SpeedRegulator/SpeedRegulator';
import TimeInput from './TimeInput/TimeInput';
import './CountDownTimer.scss';

const CountDownTimer = () => {
  return (
    <div className="countdown">
      <section>
        <h4>Time yourself!</h4>
        <TimeInput />
        <Display />
        <SpeedRegulator />
      </section>
    </div>
  )
};

export default CountDownTimer;
