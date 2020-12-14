import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

// Components
import Locations from '../index';

describe('Locations Test Suite', () => {
  it('renders correctly without any data', () => {
    const output = shallow(<Locations />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('renders correctly without any data', () => {
    const output = shallow(
      <Locations
        getLocations={() => {}}
        locationData={{
          results: [
            {
              id: 1,
              name: 'Earth (C-137)',
              type: 'Planet',
              dimension: 'Dimension C-137'
            }
          ]
        }}
      />
    );
    output.find('Pagination').props().onChange(1);
    expect(output.state().currentPage).toEqual(1);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
