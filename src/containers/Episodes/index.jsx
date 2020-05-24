import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getEpisodes } from './actions';
import Episodes from '../../components/Episodes';
import { episodeData } from './selectors';

const mapStateToProps = createStructuredSelector({
  episodeData
});

const mapDispatchToProps = (dispatch) => ({
  getEpisodes: (pageNo) => dispatch(getEpisodes(pageNo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Episodes);
