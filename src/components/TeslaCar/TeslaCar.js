import React from 'react';
import PropTypes from 'prop-types';
import './TeslaCar.css';
const TeslaCar = (props) => {
  console.log(props.wheelSize);
  return (
    <div className='tesla-car tesla-car-animation'>
      <div
        className={`tesla-wheels tesla-wheel--animation--${props.wheelSize}`}
      >
        <div
          className={`tesla-wheel tesla-wheel--front tesla-wheel--${props.wheelSize}`}
        ></div>
        <div
          className={`tesla-wheel tesla-wheel--rear tesla-wheel--${props.wheelSize}`}
        ></div>
      </div>
    </div>
  );
};

TeslaCar.propTypes = {
  wheelSize: PropTypes.number,
};

export default TeslaCar;
