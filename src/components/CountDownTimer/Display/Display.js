import React from 'react';

import './Display.scss';

const Display = () => {
  return (
      <div className="display">
        <p className="alert-info"><em>More than halfway there!</em></p>
        <div className="display-timer">
          <div className="time">
            <h5 className="minutes">15</h5>
            <div className="second-count">
              <div className="square-dot"><span></span></div>
              <div className="square-dot"><span></span></div>
            </div>
            <h5 className="seconds">15</h5>
          </div>
          <h5 className="pause"><i className="fa fa-pause-circle-o" aria-hidden="true"></i></h5>
        </div>
      </div>
  )
};

export default Display;
