import React, { useContext } from 'react';
import { CountdownContext } from "../../../state/Contexts/CountdownContext";

import './Display.scss';

const Display = () => {
  const { state, setState } = useContext(CountdownContext);
  const { blinking, infoText, minutes, seconds, timerColor } = state;

  const onPause = () => {
    setState({ ...state, pause: false, resume: true });
  };

  const onResume = () => {
    // only resume if there is time left
    if ((minutes * 60) + seconds > 0) {
      setState({ ...state, pause: true, resume: false });
    }
  };

  return (
      <div className="display">
        <p className="alert-info"><em>{infoText}</em></p>
        <div className="display-timer-container">
          <div className="display-timer">
            <div className="time">
              <h5 className={`minutes ${timerColor}-color ${blinking}`}>
                {state.minutes < 10 ? `0${state.minutes}` : state.minutes}
              </h5>
              <div className="second-count">
                <div className={`square-dot ${timerColor}-background`}><span></span></div>
                <div className={`square-dot ${timerColor}-background ${blinking}`}><span></span></div>
              </div>
              <h5 className={`seconds ${timerColor}-color ${blinking}`}>
                {state.seconds < 10 ? `0${state.seconds}` : state.seconds}
              </h5>
            </div>
            {state.pause ? 
            <h5 className="pause">
              <i onClick={onPause} className="fa fa-pause-circle-o" aria-hidden="true"></i></h5>
              : ''
            }
            {state.resume ? <h5 className="resume">
              <i onClick={onResume} className="fa fa-play-circle-o" aria-hidden="true"></i></h5>
              : ''
            }
          </div>
        </div>
      </div>
  )
};

export default Display;
