import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

// Components
import Pagination from '../index';

describe('Pagination Test Suite', () => {
  const onChange = jest.fn(() => {});

  it('check for showPagination', () => {
    const output = shallow(
      <Pagination
        contentLength={11}
        currentPage={1}
        limit={10}
        onChange={onChange}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const output = shallow(
      <Pagination
        contentLength={9}
        currentPage={1}
        limit={10}
        onChange={onChange}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('simulate click on prev button', () => {
    const output = shallow(
      <Pagination
        contentLength={9}
        currentPage={1}
        limit={10}
        onChange={onChange}
      />
    );
    output.find('#prev').simulate('click', {
      stopPropagation: () => {}
    });
    expect(onChange).toHaveBeenCalled();
  });

  it('simulate click on next button', () => {
    const output = shallow(
      <Pagination
        contentLength={9}
        currentPage={1}
        limit={10}
        onChange={onChange}
      />
    );
    output.find('#next').simulate('click', {
      stopPropagation: () => {}
    });
    expect(onChange).toHaveBeenCalled();
  });
});
