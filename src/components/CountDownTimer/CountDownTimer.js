import React from 'react';

import Display from './Display/Display';
import SpeedRegulator from './SpeedRegulator/SpeedRegulator';
import TimeInput from './TimeInput/TimeInput';
import CountdownContextProvider from "../../state/Contexts/CountdownContext";
import './CountDownTimer.scss';
import alarm from '../../assets/audio/alarm.mp3';

const CountDownTimer = () => {
  return (
    <CountdownContextProvider>
      <div className="countdown">
        <section>
          <h1>Visualize your launch time!</h1>
          <TimeInput />
          <Display  />
          <SpeedRegulator />
        </section>
        <audio id="alarm" src={alarm} controls/>
      </div>
    </CountdownContextProvider>
  )
};

export default CountDownTimer;
