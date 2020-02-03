import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

// Components
import Header from '../Header';


describe('Header Test Suite', () => {
  it('renders correctly', () => {
    const output = shallow(
      <Header />,
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
