import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

const defaultProps = {
  value: '',
  onChange: () => { }
};

const TestComponent = (props) => {
  const {
    value,
    onChange
  } = props;
  return (
    <ErrorBoundary>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div>{value}</div>
    </ErrorBoundary>
  );
};

TestComponent.propTypes = propTypes;
TestComponent.defaultProps = defaultProps;

export default TestComponent;
