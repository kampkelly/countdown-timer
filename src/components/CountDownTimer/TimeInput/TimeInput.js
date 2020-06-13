import React, { useContext, useState } from 'react';

import { CountdownContext } from "../../../state/Contexts/CountdownContext";
import Button from '../../Button/Button';
import './TimeInput.scss';

const TimeInput = () => {
  const [time, setTime] = useState('');
  const [error, setError] = useState(false);
  const { state, setState } = useContext(CountdownContext);
  
  const validInput = () => {
    // validate time input
    if (!time || time < 0 || time > 60 || !Number.isInteger(Number(time))) {
      setError(true);
      return false;
    }
    return true;
  };

  const handleInputChange = (e) => {
    setError(false);
    setTime(e.target.value);
  };

  const onStart = () => {
    if (validInput()) {
      const roundedTime = Math.round(time);
      setState({
        ...state,
        duration: roundedTime,
        infoText: '',
        minutes: roundedTime,
        seconds: 0,
        pause: true,
        resume: false,
      });
    }
  };

  return (
    <div className="time-input">
      <div><span>Countdown:</span></div>
      <div><input type="number" className={error ? "error" : ""} placeholder="(Min)"
       onChange={handleInputChange} value={time}></input> </div>
      <Button onClick={onStart} text="START" />
    </div>
  )
};

export default TimeInput;
