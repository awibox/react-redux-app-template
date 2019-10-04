import React from 'react';
import {Map} from 'immutable';
import { shallow } from 'enzyme';
import HomeInfo from './HomeInfo';

const mockData = Map({
  name: 'Google',
  description: 'Search engine',
  html_url: 'https://google.com',
});

describe('HomeInfo', () => {
  it('should render correctly', () => {
    const component = shallow(<HomeInfo home={mockData}  />);
    expect(component).toMatchSnapshot();
  });
});
