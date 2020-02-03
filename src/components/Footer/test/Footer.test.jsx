import React from 'react';
// import { shallow } from 'enzyme';
// import { shallowToJson } from 'enzyme-to-json';
import renderer from 'react-test-renderer';

// Components
import Footer from '../Footer';


describe('Footer Test Suite', () => {
  it('renders correctly', () => {
    // const output = shallow(
    //   <Footer />,
    // );
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
    // expect(shallowToJson(output)).toMatchSnapshot();
  });
});
