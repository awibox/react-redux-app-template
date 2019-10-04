import React from 'react';
import User from './User';
import { shallow } from 'enzyme';

describe('User', () => {
  it('should render correctly', () => {
    const component = shallow(<User>Test user</User>);
    expect(component).toMatchSnapshot();
  });
});
