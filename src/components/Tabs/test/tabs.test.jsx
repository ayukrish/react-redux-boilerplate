import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

// Components
import Tabs from '../index';

describe('Tabs Test Suite', () => {
  it('renders correctly without any data', () => {
    const output = shallow(
      <Tabs.WrappedComponent
        history={{
          location: {
            pathname: ''
          }
        }}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const output = shallow(
      <Tabs.WrappedComponent
        history={{
          location: {
            pathname: '/locations'
          }
        }}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
