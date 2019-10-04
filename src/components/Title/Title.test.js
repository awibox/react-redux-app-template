import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';

describe('Title', () => {
  it('should render correctly', () => {
    const component = shallow(<Title>Test title</Title>);
    expect(component).toMatchSnapshot();
  });
});
