import React, { createContext, useEffect, useState } from 'react';
import PropTypes from "prop-types";

export const CountdownContext = createContext();

const CountdownContextProvider = (props) => {
  const [state, setState] = useState({
    blinking: '',
    duration: 0,
    infoText: '',
    minutes: 0,
    pause: false,
    resume: true,
    seconds: 0,
    speed: 1,
    timerColor: 'default',
  });
  const { duration, infoText, minutes, pause, resume, seconds, speed } = state;

  useEffect(() => {
    // return when timer reaches zero
    if (seconds === 0 && minutes === 0) {
      return;
    }
    // stop timer when paused
    if (!pause) {
      return;
    }

    // save timeoutId to clear the interval when the component re-renders
    const timeoutId = setTimeout(() => {
      // when a minute has finished
      if (seconds === 0 && minutes !== 0) {
        setState({ ...state, minutes: minutes - 1, seconds: 59 });
      }

      // decrease second on each run
      if (seconds !== 0) {
        const halfWay = (minutes * 60) + seconds === (duration * 60) / 2;
        const withIn20Secs = (minutes * 60) + seconds === 20;
        const at10Secs = (minutes * 60) + seconds === 10;
        const timerFinished = seconds - 1 === 0 && minutes === 0;

        if (halfWay) {
          setState({ ...state, infoText: 'More than halfway there!', seconds: seconds - 1 });
        } else if (withIn20Secs) {
            setState({ ...state, seconds: seconds - 1, timerColor: 'red' });
        } else if (at10Secs) {
            setState({ ...state, blinking: 'blinking', seconds: seconds - 1 });
        } else if (timerFinished) {
          setState({
            ...state,
            blinking: '',
            infoText: 'Time\'s up!',
            pause: false, resume: true,
            seconds: seconds - 1,
            timerColor: 'default'
          });
        } else {
          // on any other run when not a special case
          setState({ ...state, seconds: seconds - 1 });
        }
      }
      
    }, 1000 * speed);

    // clear timeout on cleanup
    return () => clearTimeout(timeoutId);
    // list of dependencies
  }, [infoText, minutes, seconds, pause, resume, speed]);

  return  (
    <CountdownContext.Provider value={{ state, setState }}>
      { props.children }
    </CountdownContext.Provider>
  )
}

CountdownContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CountdownContextProvider;
