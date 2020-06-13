import React, { useContext } from 'react';

import { CountdownContext } from "../../../state/Contexts/CountdownContext";
import Button from '../../Button/Button';
import './SpeedRegulator.scss';

const SpeedRegulator = () => {
  const { state, setState } = useContext(CountdownContext);
  const { minutes, seconds, speed } = state;

  const onSpeedChange = (rate) => {
    if (minutes !== 0 && seconds !== 0) {
      setState({ ...state, speed: rate, pause: true, resume: false });
    } else {
      setState({ ...state, speed: rate });
    }
  };

  return (
    <div className="speed-regulator">
      <div><Button selected={speed === 1 ? "selected" : ""} onClick={() => onSpeedChange(1)} text="1x" /></div>
      <div><Button selected={speed === 0.75 ? "selected" : ""} onClick={() => onSpeedChange(0.75)} text="1.5x" /></div>
      <div><Button selected={speed === 0.5 ? "selected" : ""} onClick={() => onSpeedChange(0.5)} text="2x" /></div>
    </div>
  )
};

export default SpeedRegulator;
