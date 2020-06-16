import React, { useContext, useState } from 'react';

import { CountdownContext } from "../../../state/Contexts/CountdownContext";
import Button from '../../Button/Button';
import './TimeInput.scss';

const TimeInput = () => {
  const [time, setTime] = useState('');
  const [error, setError] = useState(false);
  const { state, setState } = useContext(CountdownContext);
  const { toolTipText } = state;
  
  const validInput = () => {
    // validate time input
    if (!time || time <= 0 || time > 60 || !Number.isInteger(Number(time))) {
      setError(true);
      setState({ ...state, toolTipText: 'input is invalid' });
      return false;
    }
    return true;
  };

  const handleInputChange = (e) => {
    setError(false);
    setState({ ...state, toolTipText: '' });
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
      <div className="input-container"><input type="number" className={error ? "error" : ""} placeholder="(Min)"
       onChange={handleInputChange} value={time}></input>
       <span className="tooltip">{toolTipText}</span> </div>
      <Button onClick={onStart} text="START" />
    </div>
  )
};

export default TimeInput;
