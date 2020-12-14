import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

// Components
import Card from '../index';

describe('Card Test Suite', () => {
  it('renders correctly without any data', () => {
    const output = shallow(<Card />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('renders correctly without dataObj', () => {
    const output = shallow(<Card imgSrc="random Image" heading="Test" />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('renders correctly with dataObj', () => {
    const output = shallow(
      <Card
        imgSrc="random Image"
        heading="Test"
        dataObj={{
          Test: 'test'
        }}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
