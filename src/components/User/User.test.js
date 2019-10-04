import React from 'react';
import { shallow } from 'enzyme';
import User from './User';

describe('User', () => {
  it('should render correctly', () => {
    const component = shallow(<User>Test user</User>);
    expect(component).toMatchSnapshot();
  });
});
