import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

// Components
import Episodes from '../index';


describe('Episodes Test Suite', () => {
  it('renders correctly without any data', () => {
    const output = shallow(
      <Episodes />,
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('renders correctly without any data', () => {
    const output = shallow(
      <Episodes
        getEpisodes={() => { }}
        episodeData={{
          results: [{
            id: 1,
            name: 'Pilot',
            air_date: 'December 2, 2013',
            episode: 'S01E01'
          }]
        }}
      />,
    );
    output.find('Pagination').props().onChange(1);
    expect(output.state().currentPage).toEqual(1);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
