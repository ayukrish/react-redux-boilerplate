/** eslint-disable */
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { onChange } from './actions';
import TestComponent from '../../components/TestComponent/TestComponent';
// import { valueData } from './selectors';

// const mapStateToProps = createStructuredSelector({
//   value: valueData,
// });

const mapStateToProps = (state) => ({
  value: (state.value && state.value.data) || '',
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (data) => dispatch(onChange(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestComponent);
