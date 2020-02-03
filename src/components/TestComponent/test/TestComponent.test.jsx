import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

// Components
import TestComponent from '../TestComponent';


describe('TestComponent Test Suite', () => {
  it('renders correctly', () => {
    const onChange = jest.fn();
    const output = shallow(
      <TestComponent
        onChange={onChange}
      />,
    );
    expect(shallowToJson(output)).toMatchSnapshot();
    output.find('input').simulate('change', { target: {} });
    expect(onChange).toBeCalled();
  });

  it('should have default handleChange', () => {
    expect(TestComponent.defaultProps.onChange()).toBe(undefined);
  });
});
