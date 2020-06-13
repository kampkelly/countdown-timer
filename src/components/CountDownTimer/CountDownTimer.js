import React from 'react';

import Display from './Display/Display';
import SpeedRegulator from './SpeedRegulator/SpeedRegulator';
import TimeInput from './TimeInput/TimeInput';
import CountdownContextProvider from "../../state/Contexts/CountdownContext";
import './CountDownTimer.scss';

const CountDownTimer = () => {
  return (
    <CountdownContextProvider>
      <div className="countdown">
      <section>
        <h4>Time yourself!</h4>
        <TimeInput />
        <Display />
        <SpeedRegulator />
      </section>
      </div>
    </CountdownContextProvider>
  )
};

export default CountDownTimer;
