import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
// Components
import TestComponent from '../TestComponent';


describe('TestComponent Test Suite', () => {
  const state = {
    value: {},
    onChange: jest.fn(),
  };
  const mockStore = configureMockStore();
  const store = mockStore(state);
  const tree = shallow(<TestComponent store={store} />);

  it('renders correctly', () => {
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
