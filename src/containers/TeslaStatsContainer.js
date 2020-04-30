import { connect } from 'react-redux';
import TeslaStats from '../components/TeslaStats/TeslaStats';

const mapStateToProps = (state) => {
  return {
    carStats: state.carStats,
  };
};

const TeslaStatsContainer = connect(mapStateToProps, null)(TeslaStats);

export default TeslaStatsContainer;
