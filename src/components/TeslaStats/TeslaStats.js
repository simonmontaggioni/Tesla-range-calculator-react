import React from 'react';
import PropTypes from 'react';
import './TeslaStats.css';

const TeslaStats = (props) => {
  const listItems = props.carStats.map((stat) => (
    <li key={stat.model}>
      <div
        className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}
      ></div>
      <p>{stat.miles}</p>
    </li>
  ));
  return (
    <div className='tesla-stats tesla-stats-animation'>
      <ul>{listItems}</ul>
    </div>
  );
};

TeslaStats.propTypes = {
  carStats: PropTypes.array,
};

export default TeslaStats;
