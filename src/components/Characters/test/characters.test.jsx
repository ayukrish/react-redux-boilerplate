import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

// Components
import Characters from '../index';


describe('Characters Test Suite', () => {
  it('renders correctly without any data', () => {
    const output = shallow(
      <Characters />,
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('renders correctly without any data', () => {
    const output = shallow(
      <Characters
        getCharacters={() => { }}
        charactersData={{
          results: [{
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            origin: {
              name: 'Earth (C-137)',
              url: 'https://rickandmortyapi.com/api/location/1'
            },
            location: {
              name: 'Earth (Replacement Dimension)',
              url: 'https://rickandmortyapi.com/api/location/20'
            },
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
          }]
        }}
      />,
    );
    output.find('Pagination').props().onChange(1);
    expect(output.state().currentPage).toEqual(1);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
