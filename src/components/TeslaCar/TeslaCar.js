import React from 'react';
import PropTypes from 'prop-types';
import './TeslaCar.css';
const TeslaCar = (props) => (
  <div className='tesla-car tesla-car-animation'>
    <div className='tesla-wheels tesla-wheels-animation'>
      <div
        className={`tesla-wheel tesla-wheel--front tesla-wheel--${props.wheelSize}`}
      ></div>
      <div
        className={`tesla-wheel tesla-wheel--rear tesla-wheel--${props.wheelSize}`}
      ></div>
    </div>
  </div>
);

TeslaCar.propTypes = {
  wheelSize: PropTypes.number,
};

export default TeslaCar;
