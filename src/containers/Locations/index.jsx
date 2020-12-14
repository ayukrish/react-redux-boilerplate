import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getLocations } from './actions';
import Locations from '../../components/Locations';
import { locationData } from './selectors';

const mapStateToProps = createStructuredSelector({
  locationData
});

const mapDispatchToProps = (dispatch) => ({
  getLocations: (pageNo) => dispatch(getLocations(pageNo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
