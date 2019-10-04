import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('should render correctly', () => {
    const component = shallow(<NavBar />);
    expect(component).toMatchSnapshot();
  });
  it('mobile menu should be close', () => {
    const component = shallow(<NavBar />);
    expect(component.state('openNavMenu')).toEqual(false);
  });
  it('should open mobile menu', () => {
    const component = shallow(<NavBar />);
    component.find('.navMobile').simulate('click');
    expect(component.state('openNavMenu')).toEqual(true);
  });
});
