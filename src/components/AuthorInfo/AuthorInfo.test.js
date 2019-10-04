import React from 'react';
import { Map } from 'immutable';
import { shallow } from 'enzyme';
import AuthorInfo from './AuthorInfo';

const mockData = Map({
  avatar_url: 'http://localhost:8888/avatar',
  name: 'John',
  location: 'USA',
  company: 'Google',
  bio: 'Addition information',
  html_url: 'http://localhost:8888/url',
});

describe('AuthorInfo', () => {
  it('should render correctly', () => {
    const component = shallow(<AuthorInfo author={mockData} />);
    expect(component).toMatchSnapshot();
  });
});
