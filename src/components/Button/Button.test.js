import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const clickFn = jest.fn();
const testIcon = 'fa-github';

describe('Button', () => {
  it('should render correctly', () => {
    const component = shallow(<Button onClick={clickFn}>Test button</Button>);
    expect(component).toMatchSnapshot();
  });
  it('should call clickFn on button click', () => {
    const component = shallow(<Button onClick={clickFn}>Test button</Button>);
    component.find('div.btn').simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
  it('should have icon', () => {
    const component = shallow(<Button onClick={clickFn} icon={testIcon}>Test button</Button>);
    expect(component.find(`.${testIcon}`)).toExist();
  });
});
