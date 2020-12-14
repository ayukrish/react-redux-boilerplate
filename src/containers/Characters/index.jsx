import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getCharacters } from './actions';
import Characters from '../../components/Characters';
import { charactersData } from './selectors';

export const mapStateToProps = createStructuredSelector({
  charactersData
});

export const mapDispatchToProps = (dispatch) => ({
  getCharacters: (pageNo) => dispatch(getCharacters(pageNo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
