import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ErrorBoundary from '../ErrorBoundary';

const Something = () => null;

describe('<ErrorBoundary> window', () => {
  it('should match the snapshot', () => {
    const tree = shallow(<ErrorBoundary>Test</ErrorBoundary>);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should display an ErrorMessage if wrapped component throws', () => {
    const tree = mount(
      <ErrorBoundary>
        <Something />
      </ErrorBoundary>,
    );

    const error = new Error('test');

    tree.find(Something).simulateError(error);
    tree.setState({ hasError: true });
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
