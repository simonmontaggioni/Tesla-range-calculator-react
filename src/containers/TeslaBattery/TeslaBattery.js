import React from 'react';
import './TeslaBattery.css';

import TeslaNotice from '../../components/TeslaNotice/TeslaNotice';
import TeslaCar from '../../components/TeslaCar/TeslaCar';
import TeslaStats from '../../components/TeslaStats/TeslaStats';

class TeslaBattery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carStats: [],
      config: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 19,
      },
    };
  }

  render() {
    const { config, carStats } = this.state;
    return (
      <form className='tesla-battery'>
        <h1>Range Per Charge</h1>
        <TeslaCar wheelSize={config.wheels} />
        <TeslaStats carStats={carStats} />
        <TeslaNotice />
      </form>
    );
  }
}

export default TeslaBattery;
